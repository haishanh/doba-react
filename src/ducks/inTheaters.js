import request from 'reqwest';
import { saveState } from '../utils';

const api = 'https://api.douban.com/v2/movie/';
const oneHour = 60 * 60 * 1000;
let REQUEST;

// == action type ==
const FETCH_INTHEATERS_STARTED = 'FETCH_INTHEATERS_STARTED';
const FETCH_INTHEATERS_COMPLETED = 'FETCH_INTHEATERS_COMPLETED';
const FETCH_INTHEATERS_FAILED = 'FETCH_INTHEATERS_FAILED';

// == action ==

export function fetchInTheaters() {
  return (dispatch, getState) => {
    // if we last updated in one hour
    // dispatch no action
    const updatedAt = getState().inTheaters.updatedAt;
    if (new Date() - updatedAt < oneHour) {
      return Promise.resolve(undefined);
    }

    dispatch({
      type: FETCH_INTHEATERS_STARTED
    });

    return (REQUEST = request({
      url: api + 'in_theaters',
      type: 'jsonp'
    })
      .then(res => {
        const subjects = res.subjects;
        const updatedAt = new Date() - 0;

        return dispatch({
          type: FETCH_INTHEATERS_COMPLETED,
          payload: {
            subjects,
            updatedAt
          }
        });
      })
      .fail((err, msg) => {
        return dispatch({
          type: FETCH_INTHEATERS_FAILED,
          error: true,
          payload: err
        });
      }));
  };
}

// == reducer ==

const initialState = {
  isFetching: false,
  // inTheaters: [],
  subjects: [],
  updatedAt: new Date(0) - 0 // int number
  // celebrities: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_INTHEATERS_STARTED:
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCH_INTHEATERS_COMPLETED: {
      const { subjects, updatedAt } = action.payload;
      const newState = Object.assign({}, state, {
        isFetching: false,
        subjects,
        updatedAt
      });
      // save state to localStorage
      // maybe it's not the best place to to this
      saveState({
        inTheaters: newState
      });
      return newState;
    }

    case FETCH_INTHEATERS_FAILED:
      // TODO
      return Object.assign({}, state, {
        isFetching: false
      });

    default:
      return state;
  }
}
