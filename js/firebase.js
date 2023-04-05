import { initializeApp, getAuth } from "firebase/app";

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

  function Cadastrar(){
    var auth = getAuth(app);

    firebase.auth().createUserwithEmailAndPassword(document.getElementById("Email").value,document.getElementById("password").value)
    .then(function (user) {
        alert("Login Efetuado com sucesso");
        auth = user;

        //para atualizar o navegador
        document.getElementById("email").value = ''
        document.getElementById("senha").value = ''
    }).cath(function(error){
        alert("falha no Login")
    })
  }






/*import { database, auth} from "./modules.js"
import { ref, update } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";


  //Login do usuário com email e senha criado

  login.addEventListener('click',(e) =>{

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;

        const dt = new Date();
        update(ref(database, 'users/' + user.uid ),{
          ultimo_login: dt,
        })
        alert('Usuário logado!');
        
      })
    .catch((error) => {
        const errorCode = error.code;
      
          if (errorCode == "auth/user-not-found"){
            alert("Usuário não existente, por favor realize o cadastro.")
          }else if(errorCode == "auth/invalid-email"){
              alert("Email inválido")
            }else if (errorCode == "auth/wrong-password"){
                alert("Email ou senha incorreta!")
              }else if(errorCode == "auth/internal-error"){
                alert("Ops um erro ocorreu, tente novamente mais tarde")
                }else {
                  alert(errorCode, "Ops um erro ocorreu")}
      });

  })
*/