// connect the react application to index.html
// import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// initialize Redux
// provider keeps track of the global state at aywhwere in the app
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
// import components
import App from './App';

// setting up redux
const store = createStore(reducers, compose(applyMiddleware(thunk)))
// connecting the div with and id of root
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))