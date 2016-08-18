'use strict';

module.exports = (version) => {
  const fs = require('fs');
  let output = fs.readFileSync(require.resolve('./release_file'), 'utf8');
  return output.replace('{version}', version || '1.4.0.1');
};
