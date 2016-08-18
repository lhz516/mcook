'use strict';

module.exports = () => {
  const fs = require('fs');
  let output = fs.readFileSync(require.resolve('./id_file'), 'utf8');
  return output.replace('{id}', Math.random().toString(36).substring(2,19));
};
