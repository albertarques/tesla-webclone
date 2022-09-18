// Import functions from Firebase App
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDZAqX_MlxYLf4CWSc0FoeyaF6Pwx_n3HY",
  authDomain: "tesla-webclone-73930.firebaseapp.com",
  projectId: "tesla-webclone-73930",
  storageBucket: "tesla-webclone-73930.appspot.com",
  messagingSenderId: "847032652667",
  appId: "1:847032652667:web:4261e3079c97ef623823de",
  measurementId: "G-4RCVPVTRT0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Font: https://github.com/mukulrajpoot262610/dev-case-app
export const registerUser = async (e, email, password, valPassword) => {
  e.preventDefault();
  // Validation email regex
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return alert("Has introducido una dirección de correo no válida.");
  }
  // Validation password -> valPassword
  if (password !== valPassword) {
    return alert("Las contraseñas deben coincidir.");
  }
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Ha sido registrado con éxito.");
  } catch (error) {
    console.log(error.code); // 'auth/network-request-failed'
    console.log(error.message); // 'Firebase: Error (auth/network-request-failed).'
    console.log(error.name); // 'FirebaseError'
    console.log(error.customData); // {}
  }
};

export const loginUser = (e, email, password) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
  signOut(auth);
};

export function ifIsUserLoggedShowEmail(user, loading) {
  if (user) {
    return user.email;
  }
  if (loading) {
    return "...cargando usuario";
  } else {
    return "usuario no identificado.";
  }
}
