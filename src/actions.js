import { apiCallAsync } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants'

export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const requestRobots = () => async (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING })
  try {
    var data = await apiCallAsync('https://jsonplaceholder.typicode.com/users')
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
  }
  // apiCall('https://jsonplaceholder.typicode.com/users')
  //   .then(data => {
  //     console.log('then called with: ', data);
  //     return dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data })
  //   })
  //   .catch(error => { 
  //     console.log('catch called with: ', data);
  //     return dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
  //   })
}