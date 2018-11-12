import * as types from './../constant/ActionTypes';
import {callAPIList} from './../utils/APIcaller';


export const getDataTab1 = () => {
  return (dispatch) => {
    callAPIList("GET", "posts", null).then(res => {
      dispatch(setDataTab1(res.data));
    })
  }
};

export const setDataTab1 = (data) => {
  return {
    type: types.SET_DATA_TAB1,
    data,
  }
};

export const getDataTab2 = () => {
  return (dispatch) => {
    callAPIList("GET", "todos", null).then(res => {
      dispatch(setDataTab2(res.data));
    })
  }
};

export const setDataTab2 = (data) => {
  return {
    type: types.SET_DATA_TAB2,
    data,
  }
};

export const getDataTab3 = () => {
  return (dispatch) => {
    callAPIList("GET", "albums", null).then(res => {
      dispatch(setDataTab3(res.data));
    })
  }
};

export const setDataTab3 = (data) => {
  return {
    type: types.SET_DATA_TAB3,
    data,
  }
};

