# timestamp-ng

A tool for showing timestamp.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]
[![downloads][downloads-img]][npm-url]

[npm-image]: https://img.shields.io/npm/v/timestamp-ng.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/timestamp-ng
[travis-image]: https://img.shields.io/travis/henryhuang/timestamp-ng.svg?style=flat-square
[travis-url]: https://travis-ci.org/henryhuang/timestamp-ng
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://standardjs.com/
[downloads-img]: https://img.shields.io/npm/dm/timestamp-ng.svg?style=flat-square

## Install

```

$ npm install timestamp-ng -g
```

## Usage

### For command line

```
Usage: timestamp-ng [options]

Options:
  -d, --date_string       the date string
  -f, --format            the date string format, defined see
                          http://momentjs.com/docs/#/parsing/string-format/
  -s, --show_date_string  show date string                      [default: false]
  -h, --help              Show help                                    [boolean]
  -v, --version           Show version number                          [boolean]

Examples:
  timestamp-ng
  timestamp-ng -d 20161121
  timestamp-ng -d 2016-11-21 -f YYYY-MM-DD
```

### For Node API

```

let tsng = require('timestamp-ng');

let ts = tsng(options);

```

options default:

```
{
    date_string: THE_DATE_NOW,
    format: '',
    show_date_string: false
}
```

## License

[ISC](LICENSE.md)

