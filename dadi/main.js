// "Gioco dei dadi" PC vs. Human: chiedi un numero all'utente tra 1 e 6 (giocata human) e estrai un numero casuale tra 1 e 6 (giocata PC). Chi fa il numero più alto vince!

// chiedo all'utente un numero
var dado_umano = parseInt(prompt ('scegli un numero da 1 a 6, grazie'));


// chiedo al pc di generare un numero casuale da 1 a 6
var dado_pc = Math.floor(Math.random()*5) +1;

// scrivo la regola per cui il gioco ha inizio(ovvero nel primo if tra parentesi), e scrivo le tre soluzioni possibili
var risultato ='';

if (dado_umano <7 && dado_umano >=1 && isNaN(dado_umano) == false) {
    console.log(dado_umano);
    console.log(dado_pc);

    if (dado_umano > dado_pc) {
        risultato = 'il tuo dado ha vinto!';
        console.log('il tuo dado ha vinto!');

    } else if (dado_umano == dado_pc) {
        risultato = 'Hai pareggiato con il PC';
        console.log('Hai pareggiato con il PC');
    }
    else {
        risultato = 'il tuo dado ha perso';
        console.log('il tuo dado ha perso');
    }
} else {
    risultato = 'non sei stato al gioco! Riprova.';
    console.log('non sei stato al gioco! Riprova.');
}

document.getElementById('result').innerHTML = risultato ;

// la regola else fuori serve nel caso l'utente scriva un numero superiore a 6 o inferiore ad 1, e se scrive una parola anzichè un numero
