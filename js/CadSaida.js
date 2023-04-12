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

    addDoc(collection(db, "funcionario"), {
        nome: nomefuncionario, 
        departamento: departamento,
        hora:horario
        
        
    });

   

        
})
//====================================================================MODAL==================
 // Função para abrir o modal
 function openModal() {
    document.getElementById('modal').style.display = 'block';
  }

  // Função para fechar o modal
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }

  // Função para buscar funcionários na lista
  function searchEmployees() {
    let input, filter, ul, li, item, i;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('employeeList');
    li = ul.getElementsByClassName('employee-item');

    for (i = 0; i < li.length; i++) {
      item = li[i];
      if (item.innerHTML.toUpperCase().indexOf(filter) > -1) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    }
  }
 
