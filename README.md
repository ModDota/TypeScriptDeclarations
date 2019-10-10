# Dota Lua Types

TypeScript definitions for Dota 2 Lua API, designed to be used with
[TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua).

## Installation

1. Get package from npm

```shell
yarn add -D dota-lua-types
# or
npm install -D dota-lua-types
```

2. Modify your `tsconfig.json`

```json
{
  "compilerOptions": {
    "types": ["dota-lua-types"],
    "plugins": [{ "transform": "dota-lua-types/transformer" }]
  }
}
```

## Notes

- You can explore the same data in readable form on
  [dota-data](https://dota-data.netlify.com/vscripts/) page.

- All enum names are normalized to avoid repetition, so instead of
  `EDOTA_ModifyGold_Reason.DOTA_ModifyGold_Unspecified` you have to use
  `ModifyGoldReason.UNSPECIFIED`

- To extend standard classes you can use declaration merging:

  ```ts
  interface CDOTA_BaseNPC {
    log(message: string): void;
  }

  CDOTA_BaseNPC.log = function(message) {
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
