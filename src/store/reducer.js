import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/Header/store'
import { reducer as homeReducer } from '../pages/Home/store'
import { reducer as translationReducer } from '../pages/Translation/store'

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  translation: translationReducer
})
