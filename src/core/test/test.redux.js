import {createAction, handleActions} from 'redux-actions';
import {createLogic} from 'redux-logic';

export const Test = createAction("TEST");

export const reducer = handleActions({
    [Test]: (state, action) => {
        return state;
    }
});

export const logic = createLogic({
    type: Test,
    latest: true,
    process({getState, action}, dispatch, next) {
        done();
    }
});