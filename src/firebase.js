import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBVAl4mmvR8KghL2LqK91UiSGzN6i_qW4s",
    authDomain: "national-labour-service-dsn.firebaseapp.com",
    databaseURL: "https://national-labour-service-dsn-default-rtdb.firebaseio.com",
    projectId: "national-labour-service-dsn",
    storageBucket: "national-labour-service-dsn.appspot.com",
    messagingSenderId: "846158267108",
    appId: "1:846158267108:web:f06271ca3b9565c975e2f1",
    measurementId: "G-RK2135N7YS"
});


const db = firebaseApp.firestore();


export { db }
