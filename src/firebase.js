import firebase,{initializeApp} from "firebase/compat/app";
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyArLAiDNj9ki3P2gi-No1C_5NRWwFqZJqE",
  authDomain: "react-crud-58eae.firebaseapp.com",
  databaseURL: "https://react-crud-58eae-default-rtdb.firebaseio.com",
  projectId: "react-crud-58eae",
  storageBucket: "react-crud-58eae.appspot.com",
  messagingSenderId: "242169916793",
  appId: "1:242169916793:web:c473e2ada30b94267c93a8"
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref()

