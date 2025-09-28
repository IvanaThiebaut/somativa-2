import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBekCMhW5J1ykVbrt8AHgZOe-I6x1jIj-o",
  authDomain: "projetoead-ffb16.firebaseapp.com",
  projectId: "projetoead-ffb16",
  storageBucket: "projetoead-ffb16.firebasestorage.app",
  messagingSenderId: "716955784209",
  appId: "1:716955784209:web:dce456fb63c7072f7f8db0"
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;    