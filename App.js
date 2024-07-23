import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import Environment from './src/environment';
export default function App() {
    return (
        <Provider store={store}>
            <Environment/>
        </Provider>
    );
}

