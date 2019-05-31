import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import modules from './modules';
import rootSaga from '../sagas';

const configure = () => {
  const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();
  
  const store = createStore(modules, composeEnhancers(
    applyMiddleware(sagaMiddleware)
  ));

  return store;
}

export default configure;