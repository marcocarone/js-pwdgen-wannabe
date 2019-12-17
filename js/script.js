// Chiedo all’utente il suo nome
var nomeUtente = prompt('Qual è il tuo nome?');
// chiedo il suo cognome
var cognomeUtente = prompt('Qual è il tuo cognome?');
// chiedo il suo colore preferito
var colorePreferito = prompt('Qual è il tuo colore preferito?');

var password = nomeUtente + cognomeUtente + colorePreferito + "19";
// scrivo sulla pagina la password generata
document.getElementById("password-generata").innerHTML = password;
// scrivo sulla pagina tutti i dati di input raccolti
document.getElementById('nome-utente').innerHTML = nomeUtente;
document.getElementById('cognome-utente').innerHTML = cognomeUtente;
document.getElementById('colore-preferito').innerHTML = colorePreferito;
