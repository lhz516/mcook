'use strict';

module.exports = (fileName, component, subComponents, hasChildren) => {
  let imports = '';
  let sub = '';
  let output;
  if (subComponents) {
    subComponents.map((subComponent) => {
      imports += `import ${subComponent.component} from \'./${subComponent.name}\';\n`;
      sub += `    <${subComponent.component} />\n`;
    });
  }
  if (hasChildren) {
    sub += '    {props.children}\n';
  }
  output = 'import React from \'react\';\n' +
    imports +
    '\n' +
    `const ${component} = (${hasChildren ? 'props' : ''}) => (\n` +
    '  <div>\n' +
    `    ${component}\n` +
    sub +
    '  </div>\n' +
    ');\n\n' +
    `export default ${component};\n`;
  return output;
};
