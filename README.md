# doxdox-plugin-json

> doxdox plugin that just returns pure json for use with more complex website templating

## Install

```bash
$ npm install doxdox doxdox-plugin-json --save-dev
```

## Usage

```js
const doxdox = require('doxdox');
const classes = [ ... ]; // List of paths to files with JSDocs
const myParser = 'sleepyfish'

doxdox.parseFiles(classes, {
  parser: myParser,
  layout: 'json'
}).then(content => {
  // content is JSON of your docs
});
```
