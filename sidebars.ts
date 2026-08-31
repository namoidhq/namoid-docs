import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Get started',
      items: ['get-started/choose-integration', 'getting-started'],
    },
    {
      type: 'category',
      label: 'Core concepts',
      items: ['concepts/resource-model', 'concepts/test-and-live'],
    },
    {
      type: 'category',
      label: 'Console',
      items: [
        'console/first-project',
        'console/applications',
        'console/custom-domain',
        'console/users-and-sessions',
        'console/branding-and-email',
        'console/audit-log',
      ],
    },
    {
      type: 'category',
      label: 'Organizations',
      items: ['organizations/overview'],
    },
    {
      type: 'category',
      label: 'Billing',
      items: ['billing/customer-billing'],
    },
    {
      type: 'category',
      label: 'Agent Auth',
      items: ['agent-auth/overview', 'agent-auth/operations'],
    },
    {
      type: 'category',
      label: 'Authentication',
      items: [
        'authentication/overview',
        'authentication/methods-and-providers',
        'authentication/access-policy',
        'authentication/security-policy',
        'guides/hosted-login',
        'guides/login-delivery-modes',
        'authentication/callback-and-token-validation',
        'authentication/sessions-and-logout',
        'guides/test-users',
        'guides/webhooks',
        'guides/production-checklist',
      ],
    },
    {
      type: 'category',
      label: 'SDKs',
      items: ['sdks/javascript', 'sdks/react', 'sdks/nextjs'],
    },
    {
      type: 'category',
      label: 'API reference',
      items: ['api/auth'],
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['reference/feature-availability', 'reference/oauth-errors'],
    },
    {
      type: 'category',
      label: 'Security',
      items: ['security/browser-and-csp'],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: ['troubleshooting/sign-in'],
    },
  ],
};

export default sidebars;
