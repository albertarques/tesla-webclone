// import { setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";

// export default function persistenceUserLogged(auth) {

//   setPersistence(auth, browserSessionPersistence)
//     .then(() => {
//       // Existing and future Auth states are now persisted in the current
//       // session only. Closing the window would clear any existing state even
//       // if a user forgets to sign out.
//       // ...
//       // New sign-in will be persisted with session persistence.
//       return signInWithEmailAndPassword(auth);
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
// }
