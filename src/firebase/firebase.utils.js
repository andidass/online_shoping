import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: '1234567890',
  authDomain: 'airbrand-shop.firebaseapp.com',
  databaseURL: 'https://airbrand-shop.firebaseio.com',
  projectId: 'airbrand-shop',
  storageBucket: 'airbrand-shop.appspot.com',
  messagingSenderId: '62489084xxxxxxxxx',
  appId: '1:624xxxxxxxxx:web:670a1b74xxxxxxx',
  measurementId: 'G-FTQN9xxxxx',
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
