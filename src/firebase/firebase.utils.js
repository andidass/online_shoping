import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDu0Zb2ea6osRTnSOYf5FiWwylZpSKlS2Q',
  authDomain: 'airbrand-shop.firebaseapp.com',
  databaseURL: 'https://airbrand-shop.firebaseio.com',
  projectId: 'airbrand-shop',
  storageBucket: 'airbrand-shop.appspot.com',
  messagingSenderId: '624890844239',
  appId: '1:624890844239:web:670a1b74779c58d27d863a',
  measurementId: 'G-FTQN9FY35M',
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
