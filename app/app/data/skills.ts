import { SkillGroup } from './types';

export const skills: SkillGroup[] = [
  { 
    category: 'Cloud', 
    items: ['AWS', 'Azure']
  },
  {
    category: 'CI/CD',
    items:  ['Azure DevOps', 'GitHub Actions','Bitbucket']
  },
  { 
    category: 'Infrastructure as Code', 
    items: ['Terraform', 'AWS CDK'] 
  },
  { 
    category: 'Programming Languages & Scripting', 
    items: ['Python', 'Typescript', 'Bash', 'Powershell'] 
  },
  { 
    category: 'Monitoring', 
    items: ['Prometheus', 'Grafana', 'CloudWatch', 'Azure Monitor'] 
  },
  { 
    category: 'Tools', 
    items: ['Git', 'Ansible', 'Helm', 'ArgoCD', 'Vault'] 
  }
];
