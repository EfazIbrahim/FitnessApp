import { createStore } from 'redux';
import {reducer as form} from 'redux-form'; // Adjust the path according to your project structure

const store = createStore(
    form,
);

export default store;