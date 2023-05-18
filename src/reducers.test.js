import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';

import * as reducers from './reducers';

import { setSearchField } from './actions';

describe('searchRobots reducer', () => {
  it ('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  })

  it ('should return the provided state in case unkown actio type', () => {
    expect(reducers.searchRobots({searchField: 'test'}, undefined)).toEqual({searchField: 'test'});
  })

  it ('should update seachField on CHANGE_SEARCHFIELD action type', () => {
    expect(reducers.searchRobots(undefined, { type: CHANGE_SEARCHFIELD, payload: 'test'})).toEqual({ searchField: 'test' });
    expect(reducers.searchRobots(undefined, setSearchField('test'))).toEqual({ searchField: 'test' });
  })
})

describe('requestRobots reducer', () => {
  
  const initialState = {
    robots: [],
    isPending: false
  }
  
  it ('should return initial state if not provided', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialState);
  })

  it ('should return provided state if action not defined', () => {
    expect(reducers.requestRobots(initialState, undefined)).toEqual(initialState);
  })

  it ('should set isPending to true for REQUEST_ROBOTS_PENDING action', () => {
    expect(reducers.requestRobots(initialState, {type: REQUEST_ROBOTS_PENDING}))
    .toEqual({robots: [], isPending: true});
  })

  it ('should set correct state for REQUEST_ROBOTS_SUCCESS action', () => {
    expect(reducers.requestRobots(initialState, {type: REQUEST_ROBOTS_SUCCESS, payload: [1, 2, 3]}))
    .toEqual({robots: [1, 2, 3], isPending: false});
  })

  it ('should set correct state for REQUEST_ROBOTS_FAILED action', () => {
    expect(reducers.requestRobots(initialState, {type: REQUEST_ROBOTS_FAILED, payload: "test error message"}))
    .toEqual({robots: [], error: "test error message", isPending: false});
  })
})

