import * as types from './../constant/ActionTypes';

var createState = [];

var myReducer = (state = createState, action) => {
  switch (action.type) {
    case types.SET_DATA_TAB1:
      state = action.data;
      return state;
    default: return state;
  }
};

export default myReducer;

