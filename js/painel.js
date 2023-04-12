import { db } from "../js/firebase.js";

import { getDocs, collection, query, where,deleteDoc, doc} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";


let dashboard = document.getElementById("dashboard")

const colecao = collection(db, "funcionario")
const arrayDocumentos = await getDocs(colecao)


    arrayDocumentos.forEach(doc => {

        let card = document.createElement("div")
        card.setAttribute("class", "card")
        
        let h2 = document.createElement("h2")
        h2.setAttribute("class", "h2nome")
        h2.innerHTML = doc.get("nome")
        
        let ptexto = document.createElement("p")
        ptexto.setAttribute("class", "ptexto")
        ptexto.innerHTML = `Foi Para - ${doc.get("departamento")}`
        
        let phora = document.createElement("p")
        phora.setAttribute("class", "hora")
        phora.innerHTML = doc.get("hora")
        
        let img = document.createElement("img")
        
        img.setAttribute("id", "lixeira")

        const image = document.getElementById('lixeira');
        img.addEventListener('click', () => {
        // Recupere a referência para o nó do Firebase que você deseja excluir
        const databaseRef = firebase.database().ref('');
  
    // Chame o método `remove()` na referência para excluir os dados do Firebase
        databaseRef.remove()
        .then(() => console.log('Dados excluídos com sucesso!'))
        .catch(error => console.error(error));
});
        img.src = "../img/lata-de-lixo.png"
        
        card.append(h2, ptexto, phora, img)
        dashboard.append(card)
        
    // esconde a mensagem
    document.querySelector('.mensagem').style.display = 'none';
  
});

