'use strict';

module.exports = () => {
  let output;
  output = 'import { createStore, combineReducers }  from \'redux\';\n' +
    'import { routerReducer } from \'react-router-redux\';\n' +
    '// import * as reducers from \'\';\n\n' +
    'const store = createStore(\n' +
    'combineReducers({\n' +
      '// ...reducers,\n' +
      'routing: routerReducer\n' +
    '})\n' +
  ');\n\n' +
  'export default store;\n';
  return output;
};
