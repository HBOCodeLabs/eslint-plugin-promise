'use strict'

var rule = require('../rules/param-names')
var RuleTester = require('eslint').RuleTester

var ruleTester = new RuleTester()
ruleTester.run('param-names', rule, {
  valid: [
    'new Promise(function(resolve, reject) { })',
    'new Promise(function(resolve) { })',
    'new Promise(function(resolve, reject, onCancel) { })'
  ],

  invalid: [
    {
      code: 'new Promise(function(reject, resolve) { })',
      errors: [ { message: 'Promise constructor\'s first parameter must be named resolve' } ]
    },
    {
      code: 'new Promise(function(resolve, rej) { })',
      errors: [ { message: 'Promise constructor\'s second parameter must be named reject' } ]
    },
    {
      code: 'new Promise(function(resolve, reject, cancelled) { })',
      errors: [ { message: 'Promise constructor\'s third parameter must be named onCancel' } ]
    }
  ]
})
