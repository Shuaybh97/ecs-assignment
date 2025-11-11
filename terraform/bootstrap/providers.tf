terraform {
   backend "s3" {
    bucket         = "ecs-assignment-terraform-state-bucket"
    key            = "ecs-assignment/bootstrap-terraform.tfstate"
    region         = "eu-west-2"
    encrypt        = true
    dynamodb_table = "ecs-assignment-terraform-state-bucket-lock"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = var.region
}
