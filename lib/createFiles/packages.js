'use strict';

module.exports = (appName) => {
  let output;
  output = '{\n' +
    `  \"name\": \"${appName}\",\n` +
    '  \"private\": true,\n' +
    '  \"scripts\": {\n' +
    '    \"start\": \"meteor run\"\n' +
    '  },\n' +
    '  \"dependencies\": {\n' +
    '    \"meteor-node-stubs\": \"~0.2.0\",\n' +
    '    \"react\": \"^15.3.0\",\n' +
    '    \"react-dom\": \"^15.3.0\",\n' +
    '    \"react-router\": \"^2.6.1\",\n' +
    '    \"redux\": \"^3.5.2\",\n' +
    '    \"react-redux\": \"^4.4.5\",\n' +
    '    \"react-router-redux\": \"^4.0.5\"\n' +
    '  }\n' +
    '}\n';
  return output;
};
