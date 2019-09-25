import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { rootReducer } from './store/reducer';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export const ACTION_CHANGE_TOKEN = 'ACTION_CHANGE_TOKEN';
export const ACTION_RESET = 'ACTION_RESET';

const persistedState = loadState();
const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000));

// localStorage.clear();

ReactDOM.render(<Provider store={store}>
    <Router>  
        <App />
    </Router >
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
