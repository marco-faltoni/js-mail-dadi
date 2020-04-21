// "Sono in lista?" Chiedi all'utente la sua email controlla che sia nella lista di chi può accedere
// (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato (sei in lista/non sei in lista)


// Creo Array contenente della mail autorizzate facenti parte di una lista
var email_array = ['oqugedda-4927@yopmail.com', 'asagata@potasf.com', 'ukumuwe-9804@yopmail.com', 'sono invincibile@posta.com', 'sonoinlista@lista.com',];
console.log(email_array);


// Chiedo all'utente la sua email
var email_utente = prompt('Digita la tua email per scoprire se sei in lista');
console.log(email_utente);

// visualizzo/stampo messaggio appropriato (sei in lista/non sei in lista)
for (var i = 0; i < nomi.length; i++) {
    console.log('sei in lista');
}

for (var i = 0; i < email_utente.length; i++) {
    email_utente[i]
    console.log('sei in lista');
}
