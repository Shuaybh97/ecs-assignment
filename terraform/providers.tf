terraform {
  backend "s3" {
    bucket         = "ecs-assignment-terraform-state-bucket"
    key            = "ecs-assignment/terraform.tfstate"
    region         = "eu-west-2"
    encrypt        = true
    dynamodb_table = "ecs-assignment-terraform-state-bucket-lock"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "5.13.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = var.region
}

provider "cloudflare" {
  api_token = jsondecode(data.aws_secretsmanager_secret_version.cloudflare_api_token.secret_string)["cloudflare_api_token"]
}