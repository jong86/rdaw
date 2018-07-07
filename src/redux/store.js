const NODE_ENV = process.env.NODE_ENV || 'development';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import reducer from './reducers/index';

const persistedReducer = persistReducer(persistConfig, reducer)

let reduxDevTools;
if (NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

export const store = createStore(
  persistedReducer,
  reduxDevTools
)

export const persistor = persistStore(store)
