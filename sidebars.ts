import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'introduction',
    'getting-started',
    {
      type: 'category',
      label: 'Authentication',
      items: ['authentication/overview', 'guides/hosted-login'],
    },
    {
      type: 'category',
      label: 'SDKs',
      items: ['sdks/javascript', 'sdks/react', 'sdks/nextjs'],
    },
  ],
};

export default sidebars;
