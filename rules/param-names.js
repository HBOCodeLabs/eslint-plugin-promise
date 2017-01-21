module.exports = {
  create: function (context) {
    return {
      NewExpression: function (node) {
        if (node.callee.name === 'Promise' && node.arguments.length === 1) {
          var params = node.arguments[0].params

          if (!params || !params.length) { return }

          if (params[0].name !== 'resolve') {
            return context.report(node, 'Promise constructor\'s first parameter must be named resolve')
          }

          if (params[1] && params[1].name !== 'reject') {
            return context.report(node, 'Promise constructor\'s second parameter must be named reject')
          }

          if (params[2] && params[2].name !== 'onCancel') {
            return context.report(node, 'Promise constructor\'s third parameter must be named onCancel')
          }
        }
      }
    }
  }
}
