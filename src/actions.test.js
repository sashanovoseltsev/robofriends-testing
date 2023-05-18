import * as actions from './actions';
import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS } from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('actions', () => {
  it('setSearchField returns correct action', () => {
    expect(actions.setSearchField("test")).toEqual({type: CHANGE_SEARCHFIELD, payload: "test"})
  })

  it('handles requesting robots API', () => {
    var robots = [
      {
        id: 1,
        name: "Sasha",
        email: "sasha@email.com"
      },
      {
        id: 2,
        name: "Misha",
        email: "misha@email.com"
      }
    ];
    window.fetch = jest.fn().mockReturnValue(Promise.resolve(mockResponse(200, null, JSON.stringify(robots))));

    const store = mockStore();
    return store.dispatch(actions.requestRobots())
      .then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({type: REQUEST_ROBOTS_PENDING});
        expect(action[1]).toEqual({ type: REQUEST_ROBOTS_SUCCESS, payload: robots});
      })
  })

  it('handles error request from robots API', () => {
    const errorMessage = 'Test Error';
    const errorResponse = new Response(errorMessage, { status: 500, statusText: 'Internal Server Error' });
    window.fetch = jest.fn().mockReturnValue(Promise.resolve(errorResponse));

    const store = mockStore();
    return store.dispatch(actions.requestRobots())
      .then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({type: REQUEST_ROBOTS_PENDING});
        expect(action[1]).toEqual({ type: REQUEST_ROBOTS_FAILED, payload: new Error(errorMessage)});
      })
  })
})

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};