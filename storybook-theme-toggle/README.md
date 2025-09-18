# Storybook Toggle Theme Example

This project is part of the `supernova-code-examples` collection. It demonstrates how to showcase themes in React Storybook without using addons — by adding a simple button in the UI that toggles a `ThemeProvider`.

It can also be used to test Supernova's Storybook hosting/import via the Supernova CLI.

## Run locally

```bash
npm install
npm run storybook
```

## Build static Storybook

```bash
npm run build-storybook
# Output: ./storybook-static
```

## Test Supernova Storybook hosting (optional)

After building, you can import the static Storybook to Supernova using the CLI:

```bash
# Install Supernova CLI if you don't have it yet
npm install -g @supernovaio/cli

# Import the static build (interactive)
supernova storybook-import --from ./storybook-static

# Or provide IDs explicitly
# supernova storybook-import --from ./storybook-static \
#   --designSystemId <YOUR_DS_ID> --brandId <YOUR_BRAND_ID> \
#   --name "storybook-toggle-theme"
```

More information about importing Storybook with the Supernova CLI:
- Connecting Storybook — Import using CLI: [Supernova Docs](https://learn.supernova.io/latest/design-systems/import-design-system-data/connecting-storybook/import-using-cli-UXnFmTGO-UXnFmTGO)
