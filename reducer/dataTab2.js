import * as types from './../constant/ActionTypes';


const myReducer = (state = null, action) => {
  switch (action.type) {
    case types.SET_DATA_TAB2:
      state = action.data;
      return state;
    default: return state;
  }
};

export default myReducer;