'use strict';

module.exports = () => {
  let output;
  output = 'import { render }  from \'react-dom\';\n' +
    'import { Meteor } from \'meteor/meteor\';\n' +
    'import routes from \'./routes\';\n\n' +
    'Meteor.startup(() => {\n' +
    '  render(routes(), document.getElementById(\'react-root\'));\n' +
    '});\n';
  return output;
};
