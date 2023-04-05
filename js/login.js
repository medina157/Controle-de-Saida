import { auth } from "../js/firebase.js"

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"

document.getElementById("login").addEventListener("click", () => {
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    const autenticacao = getAuth()
    signInWithEmailAndPassword(autenticacao, email, senha)
        .then((userCredential) => {
            alert("[SUCESSO] E-mail autenticado com sucesso.")
            window.location.href = "./painel.html"

        })
        .catch((error) => {
            alert("Erro no login.")
        });
})

