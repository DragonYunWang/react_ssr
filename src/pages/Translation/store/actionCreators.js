import { fromJS } from 'immutable'
import * as types from './actionTypes'

const changeTranslationList = list => ({
  type: types.CHANGE_TRANSLATION_LIST,
  list: fromJS(list)
})

export const getTranslationList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance
      .get('/api/translations.json?secret=D37msjPeC3')
      .then(res => {
        dispatch(changeTranslationList(res.data.data))
      })
      .catch(err => {
        console.log('TCL: getTranslationList -> err', err)
      })
  }
}
