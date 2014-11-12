[![Build Status](https://api.shippable.com/projects/545a85b5a85d45d063d91450/badge?branchName=master)](https://app.shippable.com/projects/545a85b5a85d45d063d91450/builds/latest)

js-verbal-number-parser
=======================

Simple JS utility for parsing numbers written in words to real numbers

### Usage
```js
var conv = require('./index');

var str = 'two millions sixty five thousands three hundreds and ten';

console.log(conv.translate(str)); // 2065310
```
