import { combineReducers } from 'redux';

const initialState = {
    routine: {},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ROUTINE':
            return {
                ...state,
                routine: action.payload
            };
        default:
            return state;
    }
};

export default combineReducers({
    app: rootReducer
});