![Slynova](https://cloud.githubusercontent.com/assets/2793951/13279223/696b9020-dad6-11e5-91a9-eefaa627e079.png)

# Yoyo

[![Version](https://img.shields.io/npm/v/yoyo?style=flat-square)](https://www.npmjs.com/package/yoyo)
[![Downloads](https://img.shields.io/npm/dt/yoyo.svg?style=flat-square)](https://www.npmjs.com/package/yoyo)
[![License](https://img.shields.io/npm/l/yoyo.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Yoyo is an HTTP client who wrap the new [fetch standard](https://fetch.spec.whatwg.org/), which is an **experimental technology** to replace `XMLHttpRequest`.  
[Some browsers haven't actually implemented the fetch standard](http://caniuse.com/#feat=fetch), for this reason we use [Github's fetch polyfill](https://github.com/github/fetch).

More information about `fetch()` can be found on:
* [Fetch API by MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [Introduction to fetch() by Google](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)

--
## Getting Started

This package is currently only available in the Node Package Repository.

```shell
$ npm install yoyo --save
```

--

## Examples

Using **Yoyo** is as simple as writing english.
```javascript
// This example is using new feature async/await for ES2016 (ES7)
// See https://github.com/tc39/ecmascript-asyncawait
const client = Yoyo()
const response = await client.get('http://example.com').fetch()

// or
const response = await client.post('http://example.com/users').with({ ... }).fetch('json') // or xml, text
```

You would also want to control how the request will be handled.

```javascript
client.get('http://example.com').fetchRaw()
  .then((response) => {
    // ...
  })
  .catch((e) => {
    // ...
  })
```

--

## TODO

- [ ] Get 100% of code coverage.
- [ ] Provide way to test the response status.
- [ ] Parse XML to returns JSON.
