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
    "types": ["dota-lua-types"]
  }
}
```

3. Add transformer

This step is optional, but strongly recommended. This transformer rewrites enums to their original
global names. If it's not added, regular TypeScript const enum handling is used, which may cause
issues if enum values are different from version package was built with.

Currently the only way to do it is using transpiler API directly. See
[TypeScriptToLua issue](https://github.com/TypeScriptToLua/TypeScriptToLua/issues/433) for current
implementation status.

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

- All Dota classes there are declared as interfaces. There are two ways to declare Lua abilities,
  items, and modifiers.

  - Classes with declaration merging
    ([helper functions](https://gist.github.com/ark120202/f9ccd1076887664e8e8cb7e7d78fd7d1))

    > For now this is a recommended way. In future it may be improved by decorators.

  ```ts
  interface MyModifier extends CDOTA_Modifier_Lua {}
  class MyModifier {
    // ...
  }

  // Or use declaration merging only once
  interface FakeLuaModifier extends CDOTA_Modifier_Lua {}
  abstract class FakeLuaModifier {}
  class MyModifier extends FakeLuaModifier {
    // ...
  }

  registerModifier('modifier_name', MyModifier);
  ```

  - [Helper functions](https://gist.github.com/ark120202/7826f64cc47d52cac0889ebbbeb50231)

  ```ts
  const item1 = createAbility({
    _currentValue: 0,
    counter: () => ++this._currentValue,

    OnSpellStart() {
      print(this.counter());
    },
  });
  item1.register('item_test_1');

  createAbility({
    extend: item1,

    OnSpellStart() {
      print(this.counter() * 2);
    },
  }).register('item_test_2');
  ```
