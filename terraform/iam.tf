resource "aws_iam_role" "task_execution" {
  name               = "${local.project_name}-task-exec"
  assume_role_policy = data.aws_iam_policy_document.ecs_task_assume_role.json
  tags               = merge(local.tags, { Name = "${local.project_name}-task-exec" })
}

resource "aws_iam_role_policy_attachment" "task_execution_policy_attachment" {
  role       = aws_iam_role.task_execution.name
  policy_arn = aws_iam_policy.ecr_repo_policy.arn
}

resource "aws_iam_policy" "ecr_repo_policy" {
  name   = "${local.project_name}-ecr-repo-policy"
  policy = data.aws_iam_policy_document.ecr_repo_policy.json
}