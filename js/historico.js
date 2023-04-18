import { db } from "../js/firebase.js";

import { getDocs, collection} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";


let registroItem = document.getElementById("registroItem")

const colecao = collection(db, "funcionario")
const arrayDocumentos = await getDocs(colecao)

/**arrayDocumentos.forEach(doc =>{

    let registroItem = document.createElement("div")
    card.setAttribute("class", "registroItem")

    let table = document.createElement(table)
    table.setAttribute("class", "table")

    let tr = document.createElement(tr)
    tr.setAttribute("class", "tr")
   
    let th_nome = document.createElement(th_nome)
    th.setAttribute("class", "th")
    th.innerHTML = doc.get("nome")

    let th_dep = document.createElement(th_dep)
    th.setAttribute("class", "th")
    th.innerHTML = doc.get("departamento")

    let th_hrs = document.createElement(th_hrs)
    th.setAttribute("class", "th")
    th.innerHTML = doc.get("hora")

    
})*/
dadosRef.on("value", function(array) {
    // Aqui você pode manipular os dados recebidos do Firebase
  });
  dadosRef.on("value", function(snapshot) {
    let dados = snapshot.val();
    let tabelaHTML = "<table><thead><tr><th>Coluna 1</th><th>Coluna 2</th></tr></thead><tbody>";
    for (let key in dados) {
      tabelaHTML += "<tr><td>" + dados[key].coluna1 + "</td><td>" + dados[key].coluna2 + "</td></tr>";
    }
    tabelaHTML += "</tbody></table>";
    // Adicione a tabela HTML ao DOM
    document.getElementById("tabela").innerHTML = tabelaHTML;
  });
  