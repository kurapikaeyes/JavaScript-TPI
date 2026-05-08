const formUtente = document.getElementById("formUtente");
const messaggio = document.getElementById("messaggio");

formUtente.addEventListener("submit", gestisciSubmit);

function gestisciSubmit(){
    event.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const cognome = document.getElementById("cognome").value.trim();
    const data = document.getElementById("data").value.trim();

    if(!nome || !cognome || !data){
        alert("Compila tutti i campi")
        return
    }

//Template Literals
messaggio.textContent = `Hai inserito: ${nome} ${cognome}, nato il ${data}`
}