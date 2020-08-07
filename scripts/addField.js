
// Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener("click", cloneField)


//Executar uma ação
function cloneField() {
    //Duplicar os campos. Qual campo?
    const fields = document.querySelector(".schedule-item").cloneNode(true)

    //limpar os campos: que campos ?
    
    
    //Colocar na página: onde colocar?
    document.querySelector("#schedule-items").appendChild(fields)
}
    
