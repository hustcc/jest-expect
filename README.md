# jest-expect

> Make jest expect more convenient.

[![Build Status](https://travis-ci.org/hustcc/jest-expect.svg?branch=master)](https://travis-ci.org/hustcc/jest-expect)
[![Coverage Status](https://coveralls.io/repos/github/hustcc/jest-expect/badge.svg?branch=master)](https://coveralls.io/github/hustcc/jest-expect)
[![npm](https://img.shields.io/npm/v/jest-expect.svg)](https://www.npmjs.com/package/jest-expect)
[![npm](https://img.shields.io/npm/dm/jest-expect.svg)](https://www.npmjs.com/package/jest-expect)


## Install

This should only be installed as a development dependency (`devDependencies`) as it is only designed for testing.

```bash
npm i --save-dev jest-expect
```


## Setup


Add jest-extended to your Jest setupTestFrameworkScriptFile configuration. [See for help](http://facebook.github.io/jest/docs/en/configuration.html#setuptestframeworkscriptfile-string)

```json
{
  "jest": {
    "setupTestFrameworkScriptFile": "jest-expect"
  }
}
```


## API

 - All api of [jest-extended](https://github.com/jest-community/jest-extended).
 - Additional Jest matchers of `jest-expect`.
    - [Number](#number)
        - [toBeApproximate](#tobeapproximate)

 - To be continue...


----


### Number

#### toBeApproximate

Use `toBeApproximate` to checkout if a value is approximately equal to a `Number`.

```js
test('toBeApproximate', () => {
  expect(Math.PI).toBeApproximate(3);
  expect(Math.PI).toBeApproximate(3.14);
  expect(Math.PI).toBeApproximate(3.1416);

  expect(Math.PI).not.toBeApproximate(4);
  expect(Math.PI).not.toBeApproximate(3.15);
  expect(Math.PI).not.toBeApproximate(3.1415);
 });
```


## License

MIT@[hustcc](https://github.com/hustcc).
