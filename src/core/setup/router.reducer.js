import {handleActions} from 'redux-actions';
import { ActionConst } from 'react-native-router-flux';

const defaultState = {
    scene: {},
};

export const reducer = handleActions({
    [ActionConst.FOCUS]: (state, action) => {
        console.log(action);
        return { ...state, scene: action.scene };
    }
}, defaultState);

