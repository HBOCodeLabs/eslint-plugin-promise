module.exports = {
  rules: {
    'param-names': require('./rules/param-names'),
    'always-return': require('./rules/always-return'),
    'always-catch': require('./rules/always-catch'),
    'catch-or-return': require('./rules/catch-or-return'),
    'no-native': require('./rules/no-native'),
    'no-then-fail': require('./rules/no-then-fail')
  },
  rulesConfig: {
    'param-names': 0,
    'always-return': 0,
    'always-catch': 0,
    'no-native': 0,
    'catch-or-return': 0,
    'no-then-fail': 0
  }
}
