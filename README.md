# Auth

Snippet for authentication.

See [https://harborclient-blog.com/2026/07/06/capture-auth-tokens-with-post-request-scripts-in-harborclient/](https://harborclient-blog.com/2026/07/06/capture-auth-tokens-with-post-request-scripts-in-harborclient/)

## Development

```bash
pnpm install
```

Sign the bundle directory with an Ed25519 key:

```bash
export HARBORCLIENT_PLUGIN_SIGNING_KEY=/path/to/signing.pem
pnpm sign
```

Publish a new version (bumps `snippets.json`, signs, commits, tags, and pushes):

```bash
pnpm release
pnpm release -- --version minor
```

See the [@harborclient/sdk signing docs](https://harborclient.github.io/sdk/signing) for key generation and `signature.json` format.
