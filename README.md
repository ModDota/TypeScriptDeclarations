# Dota 2 TypeScript declarations

TypeScript declarations for Dota 2 Custom Game
[Lua](https://github.com/ModDota/TypeScriptDeclarations/tree/master/packages/dota-lua-types) and
[Panorama](https://github.com/ModDota/TypeScriptDeclarations/tree/master/packages/panorama-types)
API, generated from [dota-data](https://github.com/ark120202/dota-data) dumps.

Check out our [addon template](https://github.com/ModDota/TypeScriptAddonTemplate) for usage
examples.

### Updating after a DOTA2 update (for contributors)

1. Update https://github.com/ModDota/dota-data and publish a new package version
2. Update the `@moddota/dota-data` package version in `package.json`
3. `npm ci`
4. `npm run build`
5. Commit to a new branch
6. Make a merge request

### Updating package versions (for maintainers)
1. Run `npm run bump:lua-types <major|minor|patch>` to update the lua types package, or `npm run bump:panorama-types <major|minor|patch>` to update the panorama types.
2. Push with tags
