// config-overrides.js
module.exports = function override(config, env) {
    config.ignoreWarnings = [
      {
        module: /chart\.js/,
        message: /Failed to parse source map/
      }
    ];
    return config;
  };
  