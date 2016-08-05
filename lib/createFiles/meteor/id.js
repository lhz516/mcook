'use strict';

module.exports = () => {
  let output;
  output = '# This file contains a token that is unique to your project.\n' +
    '# Check it into your repository along with the rest of this directory.\n' +
    '# It can be used for purposes such as:\n' +
    '#   - ensuring you don\'t accidentally deploy one app on top of another\n' +
    '#   - providing package authors with aggregated statistics\n\n' +
    Math.random().toString(36).substring(2,19) + '\n';
  return output;
};
