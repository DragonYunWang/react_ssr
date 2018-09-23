import { fromJS } from 'immutable'
import * as types from './actionTypes'

const defauleState = fromJS({
  login: false
})

export default (state = defauleState, action) => {
  switch (action.type) {
    case types.CHANGE_HOME_INFO:
      return state.set('login', action.login)
    default:
      return state
  }
}
