'use strict';

module.exports = () => {
  const fs = require('fs');
  let output = fs.readFileSync(require.resolve('./main_file'), 'utf8');
  return output;
};
