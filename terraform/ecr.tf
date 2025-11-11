resource "aws_ecr_repository" "ecr-app" {
  name = "ecs-assignment"
  image_scanning_configuration {
    scan_on_push = true
  }
  image_tag_mutability = "IMMUTABLE"
  force_delete         = true

  tags = merge(local.tags, { Name = "${local.project_name}-ecr-repo" })

}
