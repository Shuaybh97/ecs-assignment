resource "aws_ecs_cluster" "this" {
  name = "ecs_cluster"

  setting {
    name =  "containerInsights"
    value = "enabled"
  }

  tags = local.tags
}

resource "aws_cloudwatch_log_group" "app" {
  name              = "/ecs/${local.project_name}"
  retention_in_days = 14
  tags = local.tags
}

resource "aws_ecs_task_definition" "app" {
  family                   = "${local.project_name}-task"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.cpu
  memory                   = var.memory
  execution_role_arn       = aws_iam_role.task_execution.arn
  network_mode = "awsvpc"

  container_definitions = jsonencode([
    {
      name      = "app"
      image     = "${aws_ecr_repository.ecr-app.repository_url}:1.0"
      essential = true

      portMappings = [
        {
          containerPort = var.container_port
          hostPort      = var.container_port
          protocol      = "tcp"
        }
      ]

      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = aws_cloudwatch_log_group.app.name
          "awslogs-region"        = data.aws_region.current.name
          "awslogs-stream-prefix" = local.project_name
        }
      }
    }
  ])

  tags = local.tags
}

resource "aws_ecs_service" "fargate_service" {
  name            = "${local.project_name}-service"
  cluster         = aws_ecs_cluster.this.id
  task_definition = aws_ecs_task_definition.app.arn
  desired_count   = 2
  launch_type     = "FARGATE"

  network_configuration {
    subnets         = aws_subnet.private[*].id
    security_groups = aws_security_group.ecs[*].id
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.app.arn
    container_name   = "app"
    container_port   = var.container_port
  }

  tags = local.tags
}
