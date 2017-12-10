import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCpmuU_TTgan9EPjxD6qSRu_1_amWT6m50",
    authDomain: "image-blog-94700.firebaseapp.com",
    databaseURL: "https://image-blog-94700.firebaseio.com",
    projectId: "image-blog-94700",
    storageBucket: "image-blog-94700.appspot.com",
    messagingSenderId: "886535276082"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default};

