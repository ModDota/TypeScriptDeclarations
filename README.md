# Types Dota 2 VScripts

[![npm](https://img.shields.io/npm/v/types-dota-vscripts.svg)](https://npmjs.com/package/types-dota-vscripts)
[![Travis](https://img.shields.io/travis/ark120202/types-dota-vscripts.svg)](https://travis-ci.org/ark120202/types-dota-vscripts)

TypeScript definitions for Dota 2 VScripts API.

## Installation

1. Get Lua Types from npm

```bash
yarn add -D types-dota-vscripts
# or
npm install -D types-dota-vscripts
```

2. Modify your `tsconfig.json`

```json
{
  "compilerOptions": {
    "typeRoots": ["@types", "node_modules/types-dota-vscripts/types"]
  },
  "include": ["src/**/*.ts"]
}
```
