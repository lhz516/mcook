'use strict';

module.exports = (collection) => {
  let output;
  output = 'import {Mongo} from \'meteor/mongo\';\n\n' +
    `const ${collection.name} = new Mongo.Collection('${collection.dbName}');\n\n` +
    `export default ${collection.name};\n`;
  return output;
};
