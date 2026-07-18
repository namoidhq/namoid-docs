# NamoID documentation

Standalone source for [docs.namoid.in](https://docs.namoid.in), built with
[Docusaurus](https://docusaurus.io/).

## Development

```bash
pnpm install
pnpm start
```

The documentation is served from the site root. For example,
`docs/introduction.mdx` is available at `/introduction`.

## Validation

```bash
pnpm typecheck
pnpm build
```

The production build is written to `build/`.

## Deployment

Set the custom domain to `docs.namoid.in`. The repository includes
`static/CNAME` for hosts that use a CNAME file. Set `DOCS_SITE_URL` only when
building a preview for a different canonical origin.
