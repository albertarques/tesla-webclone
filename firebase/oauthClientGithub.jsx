// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth"

// initializeApp({
//   apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId:process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// });

// export default function githubSignIn(){
//   const provider = new GithubAuthProvider()
//   const auth = getAuth()  

//   signInWithPopup(auth, provider)  
//   .then((result) => {
//     // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//     const credential = GithubAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     // The signed-in user info.
//     const user = result.user;
//     // ...
//     console.log(user)
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GithubAuthProvider.credentialFromError(error);
//     // ...
//   });
// }

// export function githubSignOut() {
//   const provider = new GithubAuthProvider()
//   const auth = getAuth()  

//   auth.signOut()
//     .then(() => {
//       console.log("Signout successful!")
//     }, (error) => {
//       console.log("Signout failed")
//     })
// }
