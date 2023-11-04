import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import Auth from './Auth';
import CommonReducer from './CommonReducer';

const exportReducers = history => {
    return combineReducers({
        router: connectRouter(history),
        CommonReducer: CommonReducer
    });
};

export default exportReducers;

