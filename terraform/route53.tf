resource "aws_route53_zone" "primary" {
  name = var.hosted_zone_name
}

resource "aws_route53_record" "cert_validation" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = aws_acm_certificate.cert.domain_validation_options.resource_record_name
  type    = aws_acm_certificate.cert.domain_validation_options.resource_record_type
  ttl     = 60
  records = aws_acm_certificate.cert.domain_validation_options.resource_record_value
}

