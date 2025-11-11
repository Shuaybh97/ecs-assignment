# S3 bucket for Terraform state
resource "aws_s3_bucket" "tf_state" {
  bucket = var.bucket_name

  lifecycle {
    prevent_destroy = true
  }

  tags = {
    Name        = "Terraform State Bucket"
    Environment = var.environment
  }
}

# Block public access for safety
resource "aws_s3_bucket_public_access_block" "tf_state_block" {
  bucket = aws_s3_bucket.tf_state.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Enable versioning to recover old states
resource "aws_s3_bucket_versioning" "tf_state_versioning" {
  bucket = aws_s3_bucket.tf_state.id

  versioning_configuration {
    status = "Enabled"
  }
}

# Default encryption for security
resource "aws_s3_bucket_server_side_encryption_configuration" "tf_state_encryption" {
  bucket = aws_s3_bucket.tf_state.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}


# DynamoDB table for Terraform state locking
resource "aws_dynamodb_table" "tf_lock" {
  name         = "${var.bucket_name}-lock"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }

  tags = {
    Name        = "Terraform Lock Table"
    Environment = var.environment
  }
}

# GitHub OIDC provider for Actions
resource "aws_iam_openid_connect_provider" "github" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"] # GitHub Actions OIDC thumbprint
}

# IAM role assumed by GitHub Actions via OIDC
resource "aws_iam_role" "github_actions_oidc" {
  name               = "github-actions-oidc-${var.environment}"
  assume_role_policy = data.aws_iam_policy_document.github_actions_assume_role.json
}


# Custom IAM policy for GitHub Actions (grant only what's needed for Terraform state)
resource "aws_iam_policy" "github_actions_policy" {
  name        = "github-actions-oidc-policy-${var.environment}"
  description = "Policy allowing Terraform state operations for GitHub Actions (adjust least-privilege)"
  policy      = data.aws_iam_policy_document.github_actions_policy.json
}

# Attach the custom policy to the GitHub Actions role
resource "aws_iam_role_policy_attachment" "github_actions_attach_policy" {
  role       = aws_iam_role.github_actions_oidc.name
  policy_arn = aws_iam_policy.github_actions_policy.arn
}

resource "aws_iam_policy" "github_actions_bootstrap_policy" {
  name        = "github-actions-oidc-bootstrap-policy-${var.environment}"
  description = "Policy allowing bootstrap operations for GitHub Actions"
  policy      = data.aws_iam_policy_document.github_actions_bootstrap_policy.json
}

resource "aws_iam_role_policy_attachment" "github_actions_attach_bootstrap_policy" {
  role       = aws_iam_role.github_actions_oidc.name
  policy_arn = aws_iam_policy.github_actions_bootstrap_policy.arn
}
