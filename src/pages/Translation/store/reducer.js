import { fromJS } from 'immutable'
import * as types from './actionTypes'

const defaultState = fromJS({
  translationList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_TRANSLATION_LIST:
      return state.set('translationList', action.list)
    default:
      return state
  }
}
