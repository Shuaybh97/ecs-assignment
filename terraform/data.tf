data "aws_region" "current" {}
data "aws_availability_zones" "available" {}


data "aws_iam_policy_document" "ecs_task_assume_role" {
  statement {
    effect = "Allow"
    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
    actions = ["sts:AssumeRole"]
}
}


data "aws_iam_policy_document" "ecr_repo_policy" {

  statement {
    effect = "Allow"

    actions = [
      "ecr:GetDownloadUrlForLayer",
      "ecr:BatchGetImage",
      "ecr:BatchCheckLayerAvailability",
    ]

    resources = [aws_ecr_repository.ecr-app.arn]
 
  }

  statement {
    effect = "Allow"

    actions = [
      "ecr:getAuthorizationToken"
    ]

    resources = ["*"]
  }

  statement {
    effect = "Allow"

    actions = [
      "logs:*"
    ]

    resources = ["*"]
  }
}

