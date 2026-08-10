import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'introduction',
    'getting-started',
    {
      type: 'category',
      label: 'Authentication',
      items: [
        'authentication/overview',
        'guides/hosted-login',
        'guides/login-delivery-modes',
        'guides/test-users',
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
  ],
};

export default sidebars;
