import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import { fromJS } from 'immutable'
import clientAxios from '../client/request'
import serverAxios from '../server/request'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

export const getClientStore = () => {
  // 客户端脱水
  const defauleState = fromJS(window.context)
  return createStore(reducer, defauleState, composeEnhancers(applyMiddleware(thunk.withExtraArgument(clientAxios))))
}
export const getServerStore = req => {
  return createStore(reducer, composeEnhancers(applyMiddleware(thunk.withExtraArgument(serverAxios(req)))))
}
