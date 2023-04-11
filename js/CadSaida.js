import {db} from "../js/firebase.js"

import { addDoc, collection } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"

document.getElementById("registrarsaida").addEventListener("click", function(){
    let nomefuncionario = document.getElementById("nome").value
    let departamento = document.getElementById("departamento").value
    let horario = document.getElementById("horario").value
    alert(`${nomefuncionario} ${departamento} ${horario}`)

    addDoc(collection(db, "funcionario"), {
        nome: nomefuncionario, 
        departamento: departamento,
        hora:horario
        
        
    });

   

        
})
