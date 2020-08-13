import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyB7dF0WQ_LKjVfsVwF8QPuHiL-zyk88cCY",
  authDomain: "trello-44600.firebaseapp.com",
  databaseURL: "https://trello-44600.firebaseio.com",
  projectId: "trello-44600",
  storageBucket: "trello-44600.appspot.com",
  messagingSenderId: "911613060780",
  appId: "1:911613060780:web:37c519974368027a7d6109",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;