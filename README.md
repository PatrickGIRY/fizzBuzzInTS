# Fizzbuzz in TypeScript

## TypeScript tools installation with `npm`
```
yarn global add typescript
```
## Atom plugins added
```
atom-ide-ui@0.13.0
atom-typescript@12.6.3
language-typescript@0.4.6
```
## TypeScript project initialization

### Create project structure
```
mkdir fizzBuzzInTS
cd fizzBuzzInTS/
tsc --init
mkdir src
mkdir dist
```

### Setup configuration
In `tsconfig.json`

* Activate `"sourceMap": true`
* Activate `"outDir": "./dist"`

### Check TypeScript compilation
Create a ts source file `src/index.ts` with the following content :
```
const world = '🗺️';

export function hello(word: string = world): string {
  return `Hello ${world}! `;
}
```
When `tsc` is run in the project directory the following files are generated :
* `dist/index.js`:
```
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var world = '🗺️';
function hello(word) {
    if (word === void 0) { word = world; }
    return "Hello " + world + "! ";
}
exports.hello = hello;
//# sourceMappingURL=index.js.map
```
* `dist/index.js.map`:
```
{"version":3,"file":"index.js","sourceRoot":"","sources":["../src/index.ts"],"names":[],"mappings":";;AAAA,IAAM,KAAK,GAAG,KAAK,CAAC;AAEpB,SAAgB,KAAK,CAAC,IAAoB;IAApB,qBAAA,EAAA,YAAoB;IACxC,OAAO,WAAS,KAAK,OAAI,CAAC;AAC5B,CAAC;AAFD,sBAEC"}
```
### Append `tslint`
```
yarn add typescript --dev
yarn add tslint --dev
npx tslint --init
```
The file `tslint.json` is generated :
```
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {},
    "rulesDirectory": []
}
```
To run the `tslint` :
```
npx tslint src/index.ts
```

To avoid `ERROR: src/index.ts[1, 15]: ' should be "` add the following rule :
```
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
      "quotemark": [
            true,
            "single"
        ]
    },
    "rulesDirectory": []
}
```
To extends airbnb configuration :
```
yarn add tslint-config-airbnb --dev
```
```
{
    "defaultSeverity": "error",
    "extends": "tslint-config-airbnb",
    "jsRules": {},
    "rules": {},
    "rulesDirectory": []
}
```
Airbnb configuration contains rule for single quote mark.

## Add `ts-jest` for unit TypeScript

[https://github.com/kulshekhar/ts-jest](https://github.com/kulshekhar/ts-jest)

```
yarn add jest --dev
yarn add ts-jest --dev
yarn add @types/jest --dev
```

### Create test configuration
```
yarn ts-jest config:init
```
