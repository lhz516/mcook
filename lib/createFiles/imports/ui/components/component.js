'use strict';

module.exports = (fileName, component, subComponents, hasChildren) => {
  let imports = '';
  let props = '';
  let sub = '\n';
  let output;
  const fs = require('fs');
  if (subComponents) {
    subComponents.map((subComponent) => {
      imports += `import ${subComponent.component} from \'./${subComponent.name}\';\n`;
      sub += `    <${subComponent.component} />\n`;
    });
  }
  if (hasChildren) {
    sub += '    {props.children}';
    props = 'props';
  }
  output = fs.readFileSync(require.resolve('./component_file'), 'utf8');
  output = output.replace('{imports}', imports);
  output = output.replace('{props}', props);
  output = output.replace(/\{component}/g, component);
  output = output.replace('{sub}', sub);
  return output;
};
