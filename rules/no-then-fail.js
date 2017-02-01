module.exports = {
  create: function (context) {
    return {
      CallExpression: function (node) {
        if (node.callee.type === 'MemberExpression' && node.callee.property.name === 'then') {
          var params = node.arguments
          if (!params || !params.length || params.length === 1) { return }
          context.report(node, 'No .then(success, fail), use .catch')
        }
      }
    }
  }
}
