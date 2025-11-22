import { Project } from './types';

export const projects: Project[] = [
  {
    title: 'ECS Project',
    description: 'Build, containerise and deploy an application using Docker, Terraform, and ECS',
    tech: ['Terraform', 'Docker', 'ECS', 'AWS'],
    link: 'https://github.com/Shuaybh97/ECS-Project',
    status: 'completed'
  },
  {
    title: 'ECS Project v2',
    description: 'Migrated legacy Jenkins pipelines to GitLab CI, reducing build times by 60% and improving developer experience.',
    tech: ['GitLab CI', 'Docker', 'Kubernetes', 'Python'],
    link: '',
    status: 'in-progress'
  },
  {
    title: 'ECS Project MLOps Edition',
    description: 'Implementing MLOps pipeline with automated model training, testing, and deployment using Kubernetes and custom operators.',
    tech: ['Prometheus', 'Grafana', 'Go', 'Kubernetes', 'MLflow'],
    link: '',
    status: 'in-progress'
  },
  {
    title: 'EKS Project',
    description: 'Building scalable microservices infrastructure on AWS EKS with advanced networking, security policies, and GitOps deployment.',
    tech: ['EKS', 'Kubernetes', 'ArgoCD', 'AWS', 'Helm'],
    link: '',
    status: 'in-progress'
  }
];
