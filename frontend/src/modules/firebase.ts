
import firebase from 'firebase/app';
import 'firebase/auth';
import { login } from './auth';
import { store } from './store';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyBX52AtTszP6rLowSth0aBUrGLOcn6Pg2w',
  authDomain: 'darkdiagnosis-19cd1.firebaseapp.com',
  databaseURL: 'https://darkdiagnosis-19cd1.firebaseio.com',
  projectId: 'darkdiagnosis-19cd1',
  storageBucket: 'darkdiagnosis-19cd1.appspot.com',
  messagingSenderId: '346645939323',
  appId: '1:346645939323:web:7eca3d87724e84ca21cede',
  measurementId: 'G-YP1MV552BM',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged((user) => {
  console.log('on auth state changed', user);
  const payload = user === null ? null : { displayName: user.displayName, email: user.email };
  store.dispatch(login(payload));
});

export default firebase;