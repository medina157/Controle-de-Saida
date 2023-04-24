import { db } from "../js/firebase.js";

import { getDocs, collection, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

let divRegistro = document.getElementById("divRegistro")

const colecao = collection(db, "funcionario")
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

    let img = document.createElement("img")

   
    td4.addEventListener('click', async() => {

        await deleteDoc(doc(db, "funcionario", event.target.id));

          location.reload();
      });
   
    img.src = "../img/lixeira (1).png"

    tr1.append(th1, th2, th3)
    tr2.append(td1, td2, td3, td4)
    td4.append(img)
    table.append(tr1, tr2)
    registroItem.append(table)
    divRegistro.append(registroItem)
});

document.getElementById("btn-page1").addEventListener("click", function() {
  window.history.back();
});

const listaItens = document.getElementById("lista-itens");
const pontuacaoSpan = document.getElementById("pontuacao");
let pontuacao = 0;

const itens = ["Item 1", "Item 2", "Item 3"];

for (let i = 0; i < itens.length; i++) {
  const li = document.createElement("li");
  li.textContent = itens[i];
  
  const btnExcluir = document.createElement("button");
  btnExcluir.textContent = "Excluir";
  btnExcluir.onclick = function() {
    excluirItem(btnExcluir.parentNode);
  };
  
  li.appendChild(btnExcluir);
  listaItens.appendChild(li);
}

function excluirItem(item) {
  pontuacao += 1; //Adiciona 10 pontos a pontuacao global
  pontuacaoSpan.innerHTML = pontuacao; //Atualiza a exibição da pontuação no HTML
  item.remove(); //Remove o item correspondente
}