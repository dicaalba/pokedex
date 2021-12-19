import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { reducers } from '../reducers/teamReducer';

const allMiddlewares = [
  createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error,
  }),
].filter(Boolean);

const rootReducer = combineReducers({
  teams: combineReducers(reducers),
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initializeStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(...allMiddlewares)));
};