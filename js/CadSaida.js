import {db} from "../js/firebase.js"

import { addDoc, collection } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"

document.getElementById("registrarsaida").addEventListener("click", function(){
    let nomefuncionario = document.getElementById("nome").value
    let departamento = document.getElementById("departamento").value
    let horario = document.getElementById("horario").value
    alert(`${nomefuncionario} ${departamento} ${horario}`)

  //  const confirmar = getAuth()
 //   collection, addDoc(confirmar, nome, departamento, horario)
     //   .then((userCredential) => {
       
        //    window.location.href = "./painel.html"

     //   })

    addDoc(collection(db, "registro"), {
        nome: nomefuncionario, 
        departamento: departamento,
        hora:horario
    });

    
})

 // Seleciona o modal
 var modal = document.getElementById("myModal");

 // Seleciona o botão que abre o modal
 var btn = document.getElementById("myBtn");

 // Seleciona o botão para selecionar o funcionário
 var selectBtn = document.getElementById("selectButton");

 // Seleciona o elemento select com os funcionários
 var select = document.getElementById("employeeSelect");

 // Seleciona o elemento input que receberá o valor selecionado
 var input = document.getElementById("nome");

 // Quando o usuário clicar no botão, abre o modal
 btn.onclick = function() {
   modal.style.display = "block";
 }

 // Quando o usuário clicar no botão de
   selectBtn.onclick = function() {
 // Atualiza o valor do input com o valor selecionado no select
 input.value = select.value;
 
 // Fecha o modal
 modal.style.display = "none";
}

// Quando o usuário clicar no "x" para fechar o modal, fecha o modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
 modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, fecha o modal
window.onclick = function(event) {
 if (event.target == modal) {
   modal.style.display = "none";
 }
}

document.getElementById("btn-page2").addEventListener("click", function() {
  document.getElementById("btn-page2").addEventListener("click", function() {
    window.location.href = "./historico.html";
  });
});

const horaAtual = new Date();
const hora = horaAtual.getHours();
const minutos = horaAtual.getMinutes();
const horaInput = document.getElementById('horario');
horaInput.value = `${hora}:${minutos}`;


