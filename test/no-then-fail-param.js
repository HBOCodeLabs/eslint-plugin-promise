'use strict'

var rule = require('../rules/no-then-fail-param')
var RuleTester = require('eslint').RuleTester
var message = 'No .then(success, fail), use .catch'
var ruleTester = new RuleTester()
ruleTester.run('no-then-fail-param', rule, {
  valid: [

    'frank().then(go)',
    'frank().then().then().then().then()',
    'frank().then',
    'frank.then(go).then(to).catch(jail).finally(forever)',
    'frank.then(jail)',
    'franke.then(function then() {})'
  ],

  invalid: [

    // catch failures
    {
      code: 'frank().then(win, fail)',
      errors: [ { message: message } ]
    },
    {
      code: 'frank().then().then(frank, frank, frank).then().then()',
      errors: [ { message: message } ]
    },
    {
      code: 'frank.then(no, way)',
      errors: [ { message: message } ]
    },
    {
      code: 'frank.then(function then() {}, function then() {})',
      errors: [ { message: message } ]
    }
  ]
})
