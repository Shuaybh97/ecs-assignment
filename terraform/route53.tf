resource "aws_route53_zone" "primary" {
  name = var.hosted_zone_name
}

resource "aws_route53_record" "cert_validation" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = tolist(aws_acm_certificate.cert.domain_validation_options)[0].resource_record_name
  type    = tolist(aws_acm_certificate.cert.domain_validation_options)[0].resource_record_type
  ttl     = 60
  records = [tolist(aws_acm_certificate.cert.domain_validation_options)[0].resource_record_value]
}


resource "aws_route53_record" "domain_name_record" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = aws_route53_zone.primary.name
  type    = "A"
  alias {
    name                   = aws_lb.alb.dns_name
    zone_id                = aws_lb.alb.zone_id
    evaluate_target_health = true
  }
  records = [aws_lb.alb.dns_name]
}
