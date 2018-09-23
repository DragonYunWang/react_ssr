import { fromJS } from 'immutable'
import * as types from './actionTypes'

const defaultState = fromJS({
  homeList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_HOME_LIST:
      return state.set('homeList', action.list)
    default:
      return state
  }
}
