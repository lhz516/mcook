'use strict';

module.exports = (collection) => {
  const fs = require('fs');
  let output = fs.readFileSync(require.resolve('./collection_file'), 'utf8');
  output = output.replace(/\{name}/g, collection.name);
  output = output.replace('{dbName}', collection.dbName);
  return output;
};
