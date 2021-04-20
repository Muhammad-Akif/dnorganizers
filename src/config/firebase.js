import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyDYx2kVXDBPli5iwZk3meux-jPo_w-l_XU",
    authDomain: "dnorganizers.firebaseapp.com",
    databaseURL: "https://dnorganizers-default-rtdb.firebaseio.com",
    projectId: "dnorganizers",
    storageBucket: "dnorganizers.appspot.com",
    messagingSenderId: "402190384263",
    appId: "1:402190384263:web:8ee77f001ac2f280d7cc22",
    measurementId: "G-MMZWM6XG1E"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;

