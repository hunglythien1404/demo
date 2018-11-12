import * as types from './../constant/ActionTypes';
import {firebase} from './../utils/FirebaseConfig';

export const setUserInfo = (userInfo) => {
 return {
   type: types.SET_USER_INFO,
   userInfo,
 };
};

export const getUserInfo = (id) => {
  return (dispatch) => {
    let tmp = {};
    firebase.database().ref("user").child(id).once("value", (data) => {
      tmp = {
        id: id,
        username: data.val().email,
        password: data.val().password,
      }
    });
    return dispatch(setUserInfo(tmp));
  };
};

export const delUser = (id) => {
  return () => {
    firebase.database().ref("user").child(id).remove();
  };
};

export const editUser = (id, userInfo) => {
  return () => {
    firebase.database().ref("user").child(id).update(
      {
        email: userInfo.email,
        password: userInfo.password,
      }
    );
  };
};