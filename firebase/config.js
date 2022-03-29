import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsYt2HP1waL5vm4xAZWK8SgJx_f6WHtrM",
  authDomain: "amishnewsapp.firebaseapp.com",
  projectId: "amishnewsapp",
  storageBucket: "amishnewsapp.appspot.com",
  messagingSenderId: "174476941968",
  appId: "1:174476941968:web:d9f24e214e837a4ca45615",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase;
