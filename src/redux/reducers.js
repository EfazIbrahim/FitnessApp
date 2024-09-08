import { combineReducers } from 'redux';


const initialState = {
    routines: [],
    workouts: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ROUTINES':
            return {
                ...state,
                routines: [...state.routines, action.payload],
            };
        case 'SET_WORKOUTS':
            return {
                ...state,
                workouts: [...state.workouts, action.payload],
            };
        default:
            return state;
    }
};

export default combineReducers({
    app: rootReducer
});