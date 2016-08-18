'use strict';

module.exports = () => {
  const fs = require('fs');
  let output = fs.readFileSync(require.resolve('./finished-upgraders_file'), 'utf8');
  return output;
};
