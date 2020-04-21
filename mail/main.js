// "Sono in lista?" Chiedi all'utente la sua email controlla che sia nella lista di chi può accedere
// (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato (sei in lista/non sei in lista)


// Creo Array contenente della mail autorizzate facenti parte di una lista
var lista_email = ['oqugedda-4927@yopmail.com','marco@marco.com', 'asagata@potasf.com', 'ukumuwe-9804@yopmail.com', 'sonoinvincibile@posta.com', 'sonoinlista@lista.com',];


// Chiedo all'utente la sua email
var email_utente = prompt('Digita la tua email per scoprire se sei in lista');
console.log(email_utente);

// scrivo una variante con il risultato finale da definire
var risultato = false;

// imposto con ciclo for se c'è o meno il match con l'email dell'utente
for (var i = 0; i < lista_email.length; i++) {
    if (email_utente == lista_email[i]) {
        risultato = true;
    }
    // PS: in teoria il valore else può semplicemente non essere messo, in quando risulterebbe di default false perchè a IF è stato assegnato valore true
}

if (risultato == true) {
    console.log('sei in lista, complimenti');
} else {
    console.log('non sei in lista, mi dispiace');
}
