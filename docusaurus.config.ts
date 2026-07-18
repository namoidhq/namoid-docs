import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const siteUrl = process.env.DOCS_SITE_URL ?? 'https://docs.namoid.in';
const currentYear = new Date().getFullYear();

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://namoid.in/#organization',
      name: 'NamoID',
      legalName: 'PolyMindsLabs Pvt. Ltd.',
      url: 'https://namoid.in',
      logo: 'https://namoid.in/brand/namoid-mark.svg',
      sameAs: [
        'https://www.linkedin.com/company/namoidhq/',
        'https://github.com/namoidhq',
        'https://www.instagram.com/namoidhq',
        'https://www.facebook.com/people/Namo-ID/61591297266704/',
        'https://www.npmjs.com/org/namoidhq',
        'https://pypi.org/project/namoid/',
        'https://cloudsecurityalliance.org/star/registry/polymindslabs-pvt-ltd/services/namoid',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'NamoID Docs',
      alternateName: ['NamoID Documentation', 'NamoID developer docs'],
      url: siteUrl,
      publisher: {'@id': 'https://namoid.in/#organization'},
    },
  ],
};

const config: Config = {
  title: 'NamoID Docs',
  tagline: 'Hosted authentication and India-ready identity documentation',
  favicon: 'favicon.ico',
  url: siteUrl,
  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'namoidhq',
  projectName: 'namoid-docs',
  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'throw',
  future: {v4: true},

  i18n: {defaultLocale: 'en', locales: ['en']},

  headTags: [
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify(structuredData),
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/namoidhq/namoid-docs/tree/main/',
        },
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.8,
          ignorePatterns: ['/search/**'],
        },
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'description',
        content:
          'Developer documentation for NamoID Hosted Auth, SDKs, passkeys, MFA, API keys, webhooks, and India-ready identity controls.',
      },
      {name: 'application-name', content: 'NamoID Docs'},
      {property: 'og:site_name', content: 'NamoID Docs'},
      {property: 'og:type', content: 'website'},
      {property: 'og:image', content: `${siteUrl}/brand/namoid-lockup-horizontal.svg`},
      {name: 'twitter:card', content: 'summary'},
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'NamoID Docs',
      logo: {alt: 'NamoID', src: 'brand/namoid-mark.svg', href: '/introduction'},
      items: [
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Documentation'},
        {href: 'https://namoid.in', label: 'NamoID', position: 'right'},
        {href: 'https://console.namoid.in/login', label: 'Console', position: 'right'},
        {href: 'https://github.com/namoidhq', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Introduction', to: '/introduction'},
            {label: 'Getting started', to: '/getting-started'},
            {label: 'Auth API', to: '/api/auth'},
          ],
        },
        {
          title: 'NamoID',
          items: [
            {label: 'Website', href: 'https://namoid.in'},
            {label: 'Console', href: 'https://console.namoid.in/login'},
            {label: 'GitHub', href: 'https://github.com/namoidhq'},
          ],
        },
        {
          title: 'Legal',
          items: [
            {label: 'Privacy', href: 'https://namoid.in/privacy'},
            {label: 'Terms', href: 'https://namoid.in/terms'},
            {label: 'Security', href: 'https://namoid.in/security'},
          ],
        },
      ],
      copyright: `Copyright © ${currentYear} PolyMindsLabs Pvt. Ltd. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.github,
      additionalLanguages: ['bash', 'http', 'java', 'python'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
