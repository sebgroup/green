/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {
  // Work with options here

  return {
    postcssPlugin: '${pluginName}',

    Root (root, postcss) {
      root.walkRules(rule => {
        rule.selector = rule.selector.split(',').map(selector => `:host(${selector.trim()})`).join(', ');
      });
    }
  }
}

module.exports.postcss = true
