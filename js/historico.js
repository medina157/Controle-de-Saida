import { db } from "../js/firebase.js";

import { getDocs, collection, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

let divRegistro = document.getElementById("divRegistro")

const colecao = collection(db, "registro")
const arrayDocumentos = await getDocs(colecao)

arrayDocumentos.forEach(doc_atual => {

    let registroItem = document.createElement("div")
    registroItem.setAttribute("class", "registroItem")

    let table = document.createElement("table")

    let tr1 = document.createElement("tr")
    let th1 = document.createElement("th")
    th1.innerHTML = "Nome"

    let th2 = document.createElement("th")
    th2.innerHTML = "Departamento"

    let th3 = document.createElement("th")
    th3.innerHTML = "Horário de Saída"

    let tr2 = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.innerHTML = doc_atual.get("nome")



    let td2 = document.createElement("td")
    td2.innerHTML = doc_atual.get("departamento")

    let td3 = document.createElement("td")
    td3.innerHTML = doc_atual.get("hora")

    let td4 = document.createElement("td")
    td4.setAttribute("class", "botao-imagem")
    td4.setAttribute("id", doc_atual.id);

    let img = document.createElement("img");
    img.src = "../img/lixeira (1).png";
    img.setAttribute("id", "openModal");
    
    td4.addEventListener('click', async () => {
      var registroId = event.target.id;
      var modal = document.getElementById('myModal');
      modal.setAttribute('componto', registroId);
      modal.setAttribute('semponto', registroId);
      modal.style.display = 'block';
    });

    var modal = document.getElementById('myModal');
    var confirmBtn = document.getElementById('confirmBtn');
    var cancelBtn = document.getElementById('cancelBtn');


    // Excluir o registro ao clicar no botão "Sim"
confirmBtn.addEventListener('click', async function() {
  var registroId = modal.getAttribute('componto');
  
  await deleteDoc(doc(db, "registro", registroId));

  // Fecha o modal
  modal.style.display = 'none';
  
  // Recarrega a página ou executa outras ações necessárias
  location.reload();
});



    // Excluir o registro ao clicar no botão "nao"
    cancelBtn.addEventListener('click', async function() {
      var registroId = modal.getAttribute('semponto');
      
      await deleteDoc(doc(db, "registro", registroId));
    
      // Fecha o modal
      modal.style.display = 'none';
      
      // Recarrega a página ou executa outras ações necessárias
      location.reload();
    });
    

    tr1.append(th1, th2, th3)
    tr2.append(td1, td2, td3, td4)
    td4.append(img)
    table.append(tr1, tr2)
    registroItem.append(table)
    divRegistro.append(registroItem)
});

document.getElementById("btn-page1").addEventListener("click", function() {
  window.location.href = "../form.html";
});


