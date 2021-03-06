import { fromJS } from 'immutable'
import axios from 'axios'
import * as types from './actionTypes'

const changeHomeList = list => ({
  type: types.CHANGE_HOME_LIST,
  list: fromJS(list)
})

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance
      .get('/api/news.json?secret=D37msjPeC3')
      .then(res => {
        dispatch(changeHomeList(res.data.data))
      })
      .catch(err => {
        console.log('TCL: getHomeList -> err', err)
      })
  }
}
