import { initializeApp, getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBgEPXOc1N-xlBv0vc8imgGTl8xx8ofFBU",
    authDomain: "controle-de-saida-d4222.firebaseapp.com",
    projectId: "controle-de-saida-d4222",
    storageBucket: "controle-de-saida-d4222.appspot.com",
    messagingSenderId: "904775203572",
    appId: "1:904775203572:web:8d3505965eea2ba441fca1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  /* Constantes necessárias para utilização dos métodos do Firebase que serão exportadas em outros arquivos. */
export const auth = getAuth(app)
export const db = getFirestore(app)


  





