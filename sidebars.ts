import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'introduction',
    'getting-started',
    {
      type: 'category',
      label: 'Authentication',
      items: ['authentication/overview', 'authentication/mfa', 'authentication/passkeys'],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/tokens',
        'concepts/sessions',
        'concepts/multi-tenancy',
        'concepts/environments',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: ['guides/hosted-login', 'guides/audit-and-dsar'],
    },
    {
      type: 'category',
      label: 'SDKs',
      items: ['sdks/javascript', 'sdks/react', 'sdks/nextjs'],
    },
    {
      type: 'category',
      label: 'API reference',
      items: ['api/auth', 'api/keys', 'api/webhooks'],
    },
  ],
};

export default sidebars;
