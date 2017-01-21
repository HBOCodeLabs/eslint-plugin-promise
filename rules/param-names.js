module.exports = {
  create: function (context) {
    return {
      NewExpression: function (node) {

        if (node.callee.name === 'Promise' && node.arguments.length === 1) {
          var params = node.arguments[0].params

          if (!params || !params.length) { return }

          var defaults = ['resolve', 'reject']
          for (var i = 0; i < params.length; i++) {
            var actualName = params[i].name;
            var expectedName = context.options[i] || defaults[i];
            if (!expectedName || !expectedName.length) {
              return context.report(node, 'Promise constructor has unexpected parameter ' + i + ' "' + actualName + '"')
            }
            if (typeof expectedName === 'string') {
              expectedName = [expectedName]
            }
            if (expectedName.indexOf(actualName) === -1) {
              return context.report(node, 'Promise constructor parameter ' + i + ' "' + actualName + '" must be named: ' + expectedName.join(", "))
            }
          }
        }
      }
    }
  }
}
