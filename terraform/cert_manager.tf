resource "aws_acm_certificate" "cert" {
  domain_name       = "shuaib.dev"
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}

output "domain_validation_options" {
  description = "The domain validation options for the ACM certificate"
  value       = aws_acm_certificate.cert.domain_validation_options
}


