import * as _ from 'lodash';

const logicContext = require.context('../', true, /.*\.redux\.js$/);

function getLogic(logicContext) {
  return _.chain(logicContext.keys())
          .map(logicFile => logicContext(logicFile).logic)
          .flatten()
          .filter(logic => !!logic)
          .value();
}

export const rootLogic = getLogic(logicContext);
