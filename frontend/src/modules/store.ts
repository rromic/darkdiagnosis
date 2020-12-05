import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import diagnosesReducer from './diagnoses';
import { AnyAction, configureStore, Reducer } from '@reduxjs/toolkit';
import authReducer from './auth';

const history = createBrowserHistory();

const reducersArray = {
  router: connectRouter(history) as Reducer<RouterState<unknown>, AnyAction>,
  diagnosesData: diagnosesReducer,
  auth: authReducer,
};

const store = configureStore({
  reducer: reducersArray,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history)),
});

export type RootState = ReturnType<typeof store.getState>;
export { store, history };
