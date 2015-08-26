# retext-dutch [![Build Status](https://img.shields.io/travis/wooorm/retext-dutch.svg)](https://travis-ci.org/wooorm/retext-dutch) [![Coverage Status](https://img.shields.io/codecov/c/github/wooorm/retext-dutch.svg)](https://codecov.io/github/wooorm/retext-dutch)

Dutch language support for [retext](https://github.com/wooorm/retext).

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
npm install retext-dutch
```

**retext-dutch** is also available for [bower](http://bower.io/#install-packages),
[component](https://github.com/componentjs/component), and
[duo](http://duojs.org/#getting-started), and as an AMD, CommonJS, and globals
module, [uncompressed](retext-dutch.js) and [compressed](retext-dutch.min.js).

## Usage

```javascript
var retext = require('retext');
var dutch = require('retext-dutch');

retext().use(dutch).process('Kunt U zich ’s morgens', function (err, file) {});
```

## API

### [retext](https://github.com/wooorm/retext).[use](https://github.com/wooorm/retext#retextuseplugin-options)\(dutch\)

Nothing else is needed. This will add better support for the Dutch language
to retext. A complete list of what is added is available on
[**parse-dutch**](https://github.com/wooorm/parse-dutch#api) README.

**Parameters**

*   `dutch` — This plugin.

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
