"use strict";

var test = require ("tape")
var app = require('./cipher')

test('first test', function(t) {
  let actual = ('loruhp lsvxp groru vlw', 3);
  let expected = "lorem ipsum dolor sit";
  t.equal(actual, expected);
  t.end();
});
