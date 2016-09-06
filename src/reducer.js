import * as types from './actionTypes';

const initialState = {
  count: 0
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.INCREMENT_COUNT:
      return Object.assign({}, state, { count: state.count + 1 });
  }

  return state;
}

export default reducer;
