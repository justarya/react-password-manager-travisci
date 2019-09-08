import * as firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCg7Ts85YaqZf-_cfLPlLmALrINK7YcOjM",
  authDomain: "react-password-manager-6f2c4.firebaseapp.com",
  databaseURL: "https://react-password-manager-6f2c4.firebaseio.com",
  projectId: "react-password-manager-6f2c4",
  storageBucket: "react-password-manager-6f2c4.appspot.com",
  messagingSenderId: "778658719953",
  appId: "1:778658719953:web:3caaec4b21a5d0fd22fdf0"
};

firebase.initializeApp(firebaseConfig);

export default firebase;