// Chiedo all’utente il suo nome
var nomeUtente = prompt('Qual è il tuo nome?');
// chiedo il suo cognome
var cognomeUtente = prompt('Qual è il tuo cognome?');
// chiedo il suo colore preferito
var colorePreferito = prompt('Qual è il tuo colore preferito?');

var password = nomeUtente + cognomeUtente + colorePreferito + "19";
// scrivo sulla pagina la password generata
document.getElementById("password-generata").innerHTML = password;
