/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import { app } from './configuration.js';

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from './firebase.js';

export const auth = getAuth(app);

export const logInUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const logOutUser = () => signOut(auth);

export const createRegister = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const updateDisplayName = (user, displayName) => updateProfile(user, { displayName });

export const resetPassword = (email) => sendPasswordResetEmail(auth, email);

function observerLogin() {
  return onAuthStateChanged(auth, (user) => {
    if (user != null) {
      console.log('Usuário logado,', user);
    } else {
      console.log('Não há usuários logado');
    }
  });
}
observerLogin();
