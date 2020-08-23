import reduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import diagnosesReducer from './diagnoses';
//import { loginReducer } from './login';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    diagnosesData: diagnosesReducer,
});

const store = createStore(
    reducer,
    {/* login: {token: localStorage.getItem('token'), name: localStorage.getItem('name')} */},
    composeEnhancers(
        applyMiddleware(reduxThunk)
    )
);

export default store;
