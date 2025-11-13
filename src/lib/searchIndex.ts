export interface PageMetadata {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
}

export const searchIndex: PageMetadata[] = [
  {
    slug: '/',
    title: 'Introduction',
    description: 'Overview of the Bits of Good Technical Communication Toolkit.',
    keywords: ['intro', 'overview', 'toolkit'],
  },
  {
    slug: '/getting-started',
    title: 'Getting Started',
    description: 'Onboarding guide for new Bits of Good members.',
    keywords: ['onboarding', 'new members', 'checklist'],
  },
  {
    slug: '/roles',
    title: 'Roles & Responsibilities',
    description: 'Documentation responsibilities for Developers, PMs, Designers, and EMs.',
    keywords: ['roles', 'developers', 'pms', 'designers', 'ems'],
  },
  {
    slug: '/guidelines',
    title: 'Writing & Communication Guidelines',
    description: 'Core rules for clear writing and documentation.',
    keywords: ['writing', 'guidelines', 'style'],
  },
  {
    slug: '/templates',
    title: 'Templates',
    description: 'Reusable templates for PRs, specs, READMEs, and emails.',
    keywords: ['templates', 'pr', 'spec', 'readme', 'email'],
  },
  {
    slug: '/templates/pr-template',
    title: 'Pull Request Template',
    description: 'Standard template for Bits of Good pull requests.',
    keywords: ['template', 'pull request', 'pr'],
  },
  {
    slug: '/templates/spec-template',
    title: 'Feature Spec Template',
    description: 'Template for writing feature specifications.',
    keywords: ['template', 'spec', 'requirements'],
  },
  {
    slug: '/templates/readme-template',
    title: 'README Template',
    description: 'Template for project-level README files.',
    keywords: ['template', 'readme', 'project docs'],
  },
  {
    slug: '/templates/email-template',
    title: 'Nonprofit Email Template',
    description: 'Template for weekly updates to nonprofit partners.',
    keywords: ['template', 'email', 'nonprofit'],
  },
  {
    slug: '/nonprofit-communication',
    title: 'Communicating With Nonprofits',
    description: 'Guidelines for talking to nontechnical stakeholders.',
    keywords: ['nonprofits', 'communication', 'stakeholders'],
  },
  {
    slug: '/examples',
    title: 'Examples: Good vs Bad',
    description: 'Concrete examples of good and bad technical communication.',
    keywords: ['examples', 'good', 'bad', 'pr', 'spec'],
  },
  {
    slug: '/faq',
    title: 'FAQ & Common Mistakes',
    description: 'Frequently asked questions and common pitfalls.',
    keywords: ['faq', 'mistakes', 'troubleshooting'],
  },
];
