'use strict'

var rule = require('../rules/param-names')
var RuleTester = require('eslint').RuleTester

var ruleTester = new RuleTester()
ruleTester.run('param-names', rule, {
  valid: [
    // defaults
    'new Promise(function(resolve, reject) { })',
    'new Promise(function(resolve) { })',

    // options
    { code: 'new Promise(function(resolve, reject) { })', options: ['resolve', 'reject']},
    { code: 'new Promise(function(fulfill, reject, cancel) { })', options: [['resolve', 'fulfill'], 'reject', ['onCancel', 'cancel']]},
  ],

  invalid: [
    {
      code: 'new Promise(function(reject, resolve) { })',
      errors: [ { message: 'Promise constructor parameter 0 "reject" must be named: resolve' } ]
    },
    {
      code: 'new Promise(function(resolve, rej) { })',
      errors: [ { message: 'Promise constructor parameter 1 "rej" must be named: reject' } ]
    },
    {
      code: 'new Promise(function(resolve, reject, cancelled) { })',
      errors: [ { message: 'Promise constructor has unexpected parameter 2 "cancelled"' } ]
    },
    {
      code: 'new Promise(function(resolve, reject) { })',
      options: ['fulfill', 'throw'],
      errors: [ { message: 'Promise constructor parameter 0 "resolve" must be named: fulfill'  } ]
    },
    {
      code: 'new Promise(function(reject, resolve) { })',
      options: [['resolve', 'fulfill'], 'reject'],
      errors: [ { message: 'Promise constructor parameter 0 "reject" must be named: resolve, fulfill'  } ]
    }
  ]
})
