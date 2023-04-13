import { db } from "../js/firebase.js";

import { getDocs, collection, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";


let dashboard = document.getElementById("dashboard")

const colecao = collection(db, "funcionario")
const arrayDocumentos = await getDocs(colecao)


arrayDocumentos.forEach(doc_atual => {

    let card = document.createElement("div")
    card.setAttribute("class", "card")

    let h2 = document.createElement("h2")
    h2.setAttribute("class", "h2nome")
    h2.innerHTML = doc_atual.get("nome")

    let ptexto = document.createElement("p")
    ptexto.setAttribute("class", "ptexto")
    ptexto.innerHTML = `Foi Para - ${doc_atual.get("departamento")}`

    let phora = document.createElement("p")
    phora.setAttribute("class", "hora")
    phora.innerHTML = doc_atual.get("hora")

    let img = document.createElement("img")

    img.setAttribute("id", doc_atual.id)

    const image = document.getElementById(doc_atual.id);
    img.addEventListener('click', async () => {


        await deleteDoc(doc(db, "funcionario", event.target.id));

        location.reload()





// Exemplo de código que utiliza um modal
function deletarInformacao() {
  // exibe o modal de exclusão
  const modalExclusao = document.getElementById("modal-exclusao");
  modalExclusao.style.display = "block";

  // configura os botões "Sim" e "Não"
  const btnExcluirSim = document.getElementById("btn-excluir-sim");
  const btnExcluirNao = document.getElementById("btn-excluir-nao");

  // quando o botão "Sim" é clicado, executa o código para excluir a informação
  btnExcluirSim.onclick = function() {
    // código para excluir a informação
    // ...

    // fecha o modal
    modalExclusao.style.display = "none";
  }

  // quando o botão "Não" é clicado, fecha o modal sem excluir a informação
  btnExcluirNao.onclick = function() {
    modalExclusao.style.display = "none";
  }
}
if (confirm("Tem certeza de que deseja excluir essa informação?")) {
    const index = /* obter o índice do objeto a ser excluído */
    meuArray.splice(index, 1); // exclui o objeto do array
    alert("Informação excluída com sucesso!");
  } else {
     alert("A exclusão foi cancelada.");
  }
    });
    img.src = "../img/lata-de-lixo.png"

    card.append(h2, ptexto, phora, img)
    dashboard.append(card)



    // document.getElementById("lixeira").addEventListener("click", async() =>{
    //   await deleteDoc(doc(db, "funcionarios",));
    //   })


    // esconde a mensagem
    document.querySelector('.mensagem').style.display = 'none';

});

