function inviaModulo() {
      var nome = document.getElementById("nome").value.trim();
      var email = document.getElementById("email").value.trim();
      var data = document.getElementById("data").value;
      var ora = document.getElementById("ora").value;
      var tipo = document.getElementById("tipo").value;
      var messaggio = document.getElementById("messaggio").value.trim();
      var newsletter = document.getElementById("newsletter").checked;

      var avviso = document.getElementById("avviso");

      if (nome === "" || email === "" || data === "" || ora === "" || tipo === "" || messaggio === "") {
        avviso.style.display = "block";
        document.getElementById("riepilogo").style.display = "none";
        return;
      }

      avviso.style.display = "none";

      var riepilogo = document.getElementById("riepilogo");
      riepilogo.style.display = "block";
      riepilogo.textContent =
        "Nome: " + nome + " | " +
        "Email: " + email + " | " +
        "Data: " + data + " | " +
        "Ora: " + ora + " | " +
        "Tipo: " + tipo + " | " +
        "Messaggio: " + messaggio + " | " +
        "Newsletter: " + (newsletter ? "Sì" : "No");
    }