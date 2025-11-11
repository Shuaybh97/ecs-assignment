variable "region" {
  description = "AWS region to deploy backend resources"
  type        = string
  default     = "eu-west-2"
}

variable "bucket_name" {
  description = "Name of the S3 bucket for Terraform state"
  type        = string
  default = "ecs-assignment-terraform-state-bucket"
}

variable "environment" {
  description = "Environment tag (e.g. dev, prod)"
  type        = string
  default     = "dev"
}

variable "github_owner" {
  description = "GitHub repository owner"
  type        = string
  default = "Shuaybh97"
}

variable "github_repo" {
  description = "GitHub repository name"
  type        = string
  default = "ecs-assignment"
}
