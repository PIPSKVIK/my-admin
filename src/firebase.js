import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCJtDbGhXWMiQtKC8OcBNBFRazDq5IUyk4",
  authDomain: "my-admin-5717f.firebaseapp.com",
  projectId: "my-admin-5717f",
  storageBucket: "my-admin-5717f.appspot.com",
  messagingSenderId: "393944510274",
  appId: "1:393944510274:web:4c4a3a7cd516e3ab9862db"
};

firebase.initializeApp(config);
export default firebase.database();
