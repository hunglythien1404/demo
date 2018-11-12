import * as firebaseConfig from 'firebase';

var config = {
  apiKey: "AIzaSyBeV8r9QG5q8FWzs7Cq1OgqC3ZjOmg64r0",
  authDomain: "reactnative-cecef.firebaseapp.com",
  databaseURL: "https://reactnative-cecef.firebaseio.com",
  projectId: "reactnative-cecef",
  storageBucket: "reactnative-cecef.appspot.com",
  messagingSenderId: "274340779015"
};
export const firebase = firebaseConfig.initializeApp(config);