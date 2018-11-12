import * as types from './../constant/ActionTypes';

let createState = null;

const myReducer = (state = createState, action) => {
  switch (action.type) {
    case types.SET_USER_INFO:
      state = action.userInfo;
      return state;
    default: return state;
  }
};

export default myReducer;