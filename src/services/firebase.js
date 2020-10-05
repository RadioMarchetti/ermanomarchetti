import * as firebase from 'firebase'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAamOpbkP8NeLzYk9wbX59foxXm_Z2ZcQY",
  authDomain: "ermanomarchetti.firebaseapp.com",
  databaseURL: "https://ermanomarchetti.firebaseio.com",
  projectId: "ermanomarchetti",
  storageBucket: "ermanomarchetti.appspot.com",
  messagingSenderId: "545269100851",
  appId: "1:545269100851:web:8c4b1f414efbce73face46",
  measurementId: "G-WJSMX20DYD"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fb;