output "github-oidc-provider-arn" {
  description = "ARN of the GitHub OIDC iam role"
  value       = aws_iam_role.github_actions_oidc.arn
}
