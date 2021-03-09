# Dota Lua Types

TypeScript definitions for Dota 2 Lua API, designed to be used with
[TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua).

## Installation

> Check out our [addon template](https://github.com/ModDota/TypeScriptAddonTemplate) for usage
> examples.

1. Get package from npm

```shell
yarn add -D @moddota/dota-lua-types
# or
npm install -D @moddota/dota-lua-types
```

2. Modify your `tsconfig.json`

```json
{
  "compilerOptions": {
    "types": ["@moddota/dota-lua-types"],
    "plugins": [{ "transform": "@moddota/dota-lua-types/transformer" }]
  }
}
```

## Enums

This package includes 2 versions of enum types - raw and normalized. Raw types are included with
`"types": ["@moddota/dota-lua-types"]`. They are defined using original engine names and have no structural
changes. This makes the code using some enums compatible with Panorama, however it leads to
repetition and requires you to use inconsistent standard names.

Normalized enum types can be included with `"types": ["@moddota/dota-lua-types/normalized"]`. With these
types, enums have consistent names and have no repeated parts. For example, instead of
`EDOTA_ModifyGold_Reason.DOTA_ModifyGold_Unspecified` you have to write
`ModifyGoldReason.UNSPECIFIED`.

Both type versions define aliases for alternative names, so libraries created with one version would
be compatible with a different one.

## Notes

- You can explore the same data in readable form on
  [Moddota API](https://moddota.com/api/) page.

- To extend standard classes you can use declaration merging:

  ```ts
  interface CDOTA_BaseNPC {
    log(message: string): void;
  }

  CDOTA_BaseNPC.log = function (message) {
    print(`${this.GetUnitName()} says: ${message}`);
  };

  HeroList.GetHero(0)!.log('Hello world');
  ```

- All Dota classes there are declared as interfaces. To extend them you can use
  [utilities](https://gist.github.com/ark120202/f9ccd1076887664e8e8cb7e7d78fd7d1)

  ```ts
  import { BaseAbility, BaseModifier, registerAbility, registerModifier } from './utils';

  @registerAbility('ability_test')
  export class Test extends BaseAbility {
    GetIntrinsicModifierName = () => TestModifier.name;
  }

  @registerModifier('ability_test_modifier')
  export class TestModifier extends BaseModifier {
    OnCreated() {
      print('Test modifier created');
    }
  }
  ```
