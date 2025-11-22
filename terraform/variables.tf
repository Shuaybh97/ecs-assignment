variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "container_port" {
  description = "Container port to expose"
  type        = number
  default     = 3000
}

variable "cpu" {
  description = "Task CPU units"
  type        = string
  default     = "256"
}

variable "memory" {
  description = "Task memory (MiB)"
  type        = string
  default     = "512"
}

variable "region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "eu-west-2"
}

variable "hosted_zone_name" {
  description = "The name of the Route 53 hosted zone"
  type        = string
  default     = "portfolio.shuaib.dev"
}
