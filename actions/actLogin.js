import {firebase} from './../utils/FirebaseConfig';

export const checkExist = (username) => {
  return () => {
    return new Promise(resolve => {
      firebase.database().ref("user").on("value", (data) => {
        data.forEach((data) => {
          if (data.val().email === username) {
            resolve(data.key);
          }
        });
        resolve(null);
      });
    });
  };
};

export const checkPassword = (id, password) => {
  return () => {
    return new Promise(resolve => {
      firebase.database().ref("user").child(id).once("value", (data) => {
        if (data.val().password === password) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
    });
  };
};