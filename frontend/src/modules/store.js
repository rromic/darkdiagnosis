
import reduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

//import { loginReducer } from './login';

const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    router: connectRouter(history)
});

const store = createStore(
    reducer,
    {/* login: {token: localStorage.getItem('token'), name: localStorage.getItem('name')} */},
    composeEnhancers(
        applyMiddleware(reduxThunk, routerMiddleware(history))
    )
);

export {store, history};
