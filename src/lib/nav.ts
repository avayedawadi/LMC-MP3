export interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    title: 'Introduction',
    path: '/',
  },
  {
    title: 'Getting Started',
    path: '/getting-started',
  },
  {
    title: 'Roles & Responsibilities',
    path: '/roles',
  },
  {
    title: 'Writing & Communication Guidelines',
    path: '/guidelines',
  },
  {
    title: 'Templates',
    path: '/templates',
    children: [
      {
        title: 'PR Template',
        path: '/templates/pr-template',
      },
      {
        title: 'Feature Spec Template',
        path: '/templates/spec-template',
      },
      {
        title: 'README Template',
        path: '/templates/readme-template',
      },
      {
        title: 'Nonprofit Email Template',
        path: '/templates/email-template',
      },
      {
        title: 'Nonprofit Outreach Template',
        path: '/templates/nonprofit-outreach',
      },
    ],
  },
  {
    title: 'Communicating With Nonprofits',
    path: '/nonprofit-communication',
  },
  {
    title: 'Examples: Good vs Bad',
    path: '/examples',
  },
  {
    title: 'FAQ & Common Mistakes',
    path: '/faq',
  },
];
