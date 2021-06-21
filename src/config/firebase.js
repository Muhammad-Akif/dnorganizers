import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyDAld7LhDsay_LSe3whA1KYCrr70S3IdqE",
  authDomain: "dreamnovalityorg.firebaseapp.com",
  projectId: "dreamnovalityorg",
  storageBucket: "dreamnovalityorg.appspot.com",
  messagingSenderId: "782831687392",
  appId: "1:782831687392:web:ce1384f55abf9f5e7c6285",
  measurementId: "G-3YX0WW0D8C"
};
firebase.initializeApp(firebaseConfig);

export default firebase;

