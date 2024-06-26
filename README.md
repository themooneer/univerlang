# Project Documentation

## Overview
This project, `univerlang`, provides mapping functions to convert language codes between various formats such as IOC, ISO2, ISO3, and FIFA codes. It aims to simplify the process of language code conversion in software applications.

## Installation
To use `univerlang` in your project, you can install it via package manager. Run the following command:
```bash
npm install univerlang
```

## Usage
To start using `univerlang`, import it into your code:
```javascript
const univerlang = require('univerlang');

// or ES6

import { iocToIso2,... } from "univerlang"
```

### Converting Language Codes
`univerlang` provides the following functions for language code conversion:

#### `iocToIso2(code: string): string`
Converts a language code from IOC format to ISO2 format.
Example:
```javascript
const iocCode = 'USA';
const iso2Code = univerlang.iocToIso2(iocCode);
console.log(iso2Code); // Output: 'US'
```

#### `iocToIso3(code: string): string`
Converts a language code from IOC format to ISO3 format.
Example:
```javascript
const iocCode = 'USA';
const iso3Code = univerlang.iocToIso3(iocCode);
console.log(iso3Code); // Output: 'USA'
```

#### `iocToFifa(code: string): string`
Converts a language code from IOC format to FIFA format.
Example:
```javascript
const iocCode = 'USA';
const fifaCode = univerlang.iocToFifa(iocCode);
console.log(fifaCode); // Output: 'USA'
```

#### `iso2ToIoc(code: string): string`
Converts a language code from ISO2 format to IOC format.
Example:
```javascript
const iso2Code = 'US';
const iocCode = univerlang.iso2ToIoc(iso2Code);
console.log(iocCode); // Output: 'USA'
```

#### `iso2ToIso3(code: string): string`
Converts a language code from ISO2 format to ISO3 format.
Example:
```javascript
const iso2Code = 'US';
const iso3Code = univerlang.iso2ToIso3(iso2Code);
console.log(iso3Code); // Output: 'USA'
```

#### `iso2ToFifa(code: string): string`
Converts a language code from ISO2 format to FIFA format.
Example:
```javascript
const iso2Code = 'US';
const fifaCode = univerlang.iso2ToFifa(iso2Code);
console.log(fifaCode); // Output: 'USA'
```

#### `iso3ToIso2(code: string): string`
Converts a language code from ISO3 format to ISO2 format.
Example:
```javascript
const iso3Code = 'USA';
const iso2Code = univerlang.iso3ToIso2(iso3Code);
console.log(iso2Code); // Output: 'US'
```

#### `iso3ToIoc(code: string): string`
Converts a language code from ISO3 format to IOC format.
Example:
```javascript
const iso3Code = 'USA';
const iocCode = univerlang.iso3ToIoc(iso3Code);
console.log(iocCode); // Output: 'USA'
```

#### `iso3ToFifa(code: string): string`
Converts a language code from ISO3 format to FIFA format.
Example:
```javascript
const iso3Code = 'USA';
const fifaCode = univerlang.iso3ToFifa(iso3Code);
console.log(fifaCode); // Output: 'USA'
```

#### `fifaToIso2(code: string): string`
Converts a language code from FIFA format to ISO2 format.
Example:
```javascript
const fifaCode = 'USA';
const iso2Code = univerlang.fifaToIso2(fifaCode);
console.log(iso2Code); // Output: 'US'
```

#### `fifaToIso3(code: string): string`
Converts a language code from FIFA format to ISO3 format.
Example:
```javascript
const fifaCode = 'USA';
const iso3Code = univerlang.fifaToIso3(fifaCode);
console.log(iso3Code); // Output: 'USA'
```

#### `fifaToIoc(code: string): string`
Converts a language code from FIFA format to IOC format.
Example:
```javascript
const fifaCode = 'USA';
const iocCode = univerlang.fifaToIoc(fifaCode);
console.log(iocCode); // Output: 'USA'
```

## Contributing
Contributions to `univerlang` are welcome! If you find any issues or have suggestions for improvements, please open an issue on the GitHub repository.

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/themooneer/univerlang/blob/main/LICENSE.md) file for more details.


Made with ❤️ by [Mounir Hamzaoui](https://github.com/themooneer)