import { combineReducers } from 'redux-immutable'
import { reducer as homeReducer } from '../pages/Home/store/'

export default combineReducers({
  home: homeReducer
})
