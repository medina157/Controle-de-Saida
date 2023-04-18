import { db } from "../js/firebase.js";

import { getDocs, collection, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";


let dashboard = document.getElementById("dashboard")

const colecao = collection(db, "funcionario")
const arrayDocumentos = await getDocs(colecao)

arrayDocumentos.forEach(doc =>{

    let registroItem = document.createElement("div")
    card.setAttribute("class", "registroItem")

    let
})