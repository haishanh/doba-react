import { saveState } from '../utils';

function reducer(state = {
  isFetching: false,
  // inTheaters: [],
  subjects: [],
  lastUpdate: new Date('1970'),
  // celebrities: [],
}, action) {
  switch (action.type) {
    case 'START_INTHEATERS':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'DONE_INTHEATERS': {
      const newSubjects = action.data;
      const subjects = newSubjects;
      const lastUpdate = new Date();
      saveState({
        subjects,
        lastUpdate,
      });
      return Object.assign({}, state, {
        isFetching: false,
        subjects,
        lastUpdate,
      });
    }

    case 'FAIL_INTHEATERS':
      return state;

    default:
      return state;
  }
}

export default reducer;
