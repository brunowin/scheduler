import * as firebase from 'firebase';
import "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyA5HoKm5m1To0Dvull6cCnMLiYmLl7yPww",
    authDomain: "scheduler-91ef8.firebaseapp.com",
    databaseURL: "https://scheduler-91ef8-default-rtdb.firebaseio.com",
    projectId: "scheduler-91ef8",
    storageBucket: "scheduler-91ef8.appspot.com",
    messagingSenderId: "752846460447",
    appId: "1:752846460447:web:6b076ee2bb753370e5a72a",
    measurementId: "G-F5R48KDR87"
};

firebase.initializeApp(firebaseConfig);
export {firebase};