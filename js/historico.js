import { db } from "../js/firebase.js";

import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

let divRegistro = document.getElementById("divRegistro")

const colecao = collection(db, "historico")
const arrayDocumentos = await getDocs(colecao)

arrayDocumentos.forEach(doc => {
    
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
    td1.innerHTML = doc.get("nome")

    let td2 = document.createElement("td")
    td2.innerHTML = doc.get("departamento")

    let td3 = document.createElement("td")
    td3.innerHTML = doc.get("hora")
    
    let td4 = document.createElement("td")
    td4.setAttribute("class", "botao-imagem")

    let img = document.createElement("img")
    img.src = "../img/lixeira (1).png"

    tr1.append(th1, th2, th3)
    tr2.append(td1, td2, td3, td4)
    td4.append(img)
    table.append(tr1,tr2)
    registroItem.append(table)
    divRegistro.append(registroItem)
});