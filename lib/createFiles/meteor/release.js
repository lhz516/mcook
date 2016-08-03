'use strict';

module.exports = (version) => {
  let output;
  const meteorVersion = version || '1.4.0.1';
  output = `METEOR@${meteorVersion}\n`;
  return output;
};