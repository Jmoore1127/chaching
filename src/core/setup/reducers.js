import * as _ from 'lodash';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

const reduxContext = require.context('../', true, /.*\.redux\.js$/);

const rootReducer = getReducers(reduxContext);

function getReducers(reduxContext) {
    const reducerMap = _.chain(reduxContext.keys())
        .map(reduxFile => {
            const reducer = reduxContext(reduxFile).reducer;
            if (typeof reducer === 'function') {
                const namePattern = /\/(\w+)\.redux/;
                const match = namePattern.exec(reduxFile);
                if(match) {
                    const name = match[1];
                    return {name, reducer}
                }
                console.log("invalid filename... skipped reducer in "+reduxFile);
                return undefined;

            }
            return undefined;
        })
        .flatten()
        .reduce(mergeReducer, {})
        .value();

    return combineReducers(reducerMap);
}

function getGuidHash(){
        return 'xxxx'.replace(/[xy]/g, function(c) {
            // eslint-disable-next-line no-mixed-operators
            let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
}

function mergeReducer(hash, module) {
    let name = module.name;
    if(name in hash) {
        name += getGuidHash()
    }

    return _.merge({}, hash, {[name]: module.reducer});
}

export const reducers = combineReducers({
    app: rootReducer,
    router: routerReducer
});