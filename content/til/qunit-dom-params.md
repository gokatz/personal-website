---
date: "2019-11-01T10:00:00.121Z"
template: "til"
draft: false
tags:
  - "Emberjs"
links:
  - title: Qunit DOM
    link: https://github.com/simplabs/qunit-dom/blob/master/API.md#exists
image: ""
via:
  - label: 'Alwar'
    g: 'm'
    link: 'https://twitter.com/alwargak'

title: "Argument normalization in Qunit DOM APIs"
---
If we pass string as a first argument to any of the [Qunit DOM APIs](https://github.com/simplabs/qunit-dom/blob/master/API.md) instead of object, then that first argument will be considered as the assertion message string (the actual final argument to the method)

```js
assert.dom('#title').exists({ count: 1 }, 'Title should be present');

// is equal to 

assert.dom('#title').exists('Title should be present');
```