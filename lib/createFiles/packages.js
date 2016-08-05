'use strict';

module.exports = (appName) => {
  let output;
  output = '{' +
    `\"name\": \"${appName}\",` +
    '\"private\": true,' +
    '\"scripts\": {' +
    '\"start\": \"meteor run\"' +
    '},' +
    '\"dependencies\": {' +
    '\"meteor-node-stubs\": \"~0.2.0\"' +
    '}' +
    '}\n';
  return output;
};
