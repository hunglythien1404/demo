import {firebase} from './../utils/FirebaseConfig';

export const checkExist = (username) => {
  return () => {
    return new Promise(resolve => {
      firebase.database().ref("user").on("value", (data) => {
        data.forEach((data) => {
          if (data.val().email === username) {
            resolve(false);
          }
        });
        resolve(true);
      });
    });
  };
};

export const registerAcc = (info) => {
  return () => {
    firebase.database().ref("user").push(
      {
        email: info.username,
        password: info.password,
      }
    );
  };
};