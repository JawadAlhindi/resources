import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials

  // apiKey: "AIzaSyAhUTg73c7KgZopa5_pzOlAcLbrTsUuliI",
  // authDomain: "resources-for-awtad.firebaseapp.com",
  // projectId: "resources-for-awtad",
  // storageBucket: "resources-for-awtad.appspot.com",
  // messagingSenderId: "627907528135",
  // appId: "1:627907528135:web:fb3f1cb6f756617bf645e2",
  // measurementId: "G-JV3HDBXCX5",

  apiKey: "AIzaSyABNpQUeQCsZ6JeiMrWerkryDPajcx2kFY",
  authDomain: "for-test-db88.firebaseapp.com",
  projectId: "for-test-db88",
  storageBucket: "for-test-db88.appspot.com",
  messagingSenderId: "689397320839",
  appId: "1:689397320839:web:034342c7670a7188b37c22",
  measurementId: "G-SMZCZ2CTKK",
  
});

var db = firebaseApp.firestore();

export { db };
