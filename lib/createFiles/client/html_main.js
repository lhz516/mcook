'use strict';

module.exports = () => {
  const fs = require('fs');
  let output = fs.readFileSync(require.resolve('./html_main_file.html'), 'utf8');
  return output;
};
