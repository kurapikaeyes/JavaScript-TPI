const btn = document.getElementById("btn")

btn.addEventListener("click", mostraMessaggio);

function mostraMessaggio(){
    alert("Ciao")
    console.log("Hai cliccato") //Utile per il debuh
}

/* Pop-up
INTERRUZIONE
AVVISO
INFORMAZIONE
*/

//ECMA6 - arrow function e funzioni anonime (l'anno prossimo)
//btn.addEventListener("click", () => {alert("Ciao")})