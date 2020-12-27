import React, { useLayoutEffect, useRef } from 'react';
import firebase from 'src/modules/firebase';
import { auth } from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from 'src/modules/store';

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  // signInSuccessUrl: '/diagnoses/Parry%20Romberg%20Syndrome',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    /* firebase.auth.FacebookAuthProvider.PROVIDER_ID */
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => {return false;}
  }
};

const Admin = () => {
  const ref = useRef<HTMLDivElement>(null);
  const user = useSelector((state: RootState) => state.auth);

  console.log(user);
  useLayoutEffect(() => {
    if (user) {return;}
    console.log('initialize firebase');
    const ui = auth.AuthUI.getInstance() || new auth.AuthUI(firebase.auth());
    if (ref.current) {
      ui.start(ref.current, uiConfig);
    }
  }, [user]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1rem' }}>
      {user ?
        <>
          <div style={{ margin: '0.5rem', fontWeight: 900 }}>Signed in as:</div>
          <div style={{ margin: '0rem' }}>{user.email}</div>
          <Button  style={{ margin: '1rem' }} variant='outlined' onClick={() => {firebase.auth().signOut();}}>Log out</Button>
        </> :
        <>
          <div ref={ref} />
          Welocme to google firebase hosting :)
        </>
      }
    </div>
  );
};

export default Admin;