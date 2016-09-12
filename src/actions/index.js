
// INTHEATERS

// START
// STOP
// DONE
// FAIL

import request from 'reqwest';

let api = 'https://api.douban.com/v2/movie/';
let oneHour = 60 * 60 * 1000;
let REQUEST;

function fetchInTheaters() {
  return (dispatch, getState) => {

    // if we last updated in one hour
    // dispatch no action
    const lastUpdate = getState().lastUpdate;
    const now = new Date();
    if (now - new Date(lastUpdate) < oneHour) {
      var a = localStorage.getItem('state');
      return Promise.resolve(undefined);
    }

    dispatch({
      type: 'START_INTHEATERS',
    });

    return REQUEST = request({
      url: api + 'in_theaters',
      type: 'jsonp'
    })
    .then( res => {
      dispatch({
        type: 'DONE_INTHEATERS',
        data: res.subjects,
      });
    })
    .fail((err, msg) => {
      // TODO
      dispatch({
        type: 'FAIL_INTHEATERS',
      });
    });
  };
}

export {
  fetchInTheaters,
};
