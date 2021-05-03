// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var even_Odd = prompt('Choose: even or odd. Write it here please').toLowerCase();
console.log(even_Odd);
var user_Number = parseInt(prompt('Enter a number between 1 and 5'));
console.log(user_Number);
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function random_Function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var computer_Number = random_Function(0, 5);
console.log("numero computer " + computer_Number);

// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
var sommatoria = computer_Number + user_Number;
// console.log(sommatoria);


function isEven(num) {
    if (num % 2 == 0) {
        return "even";
    }
    return "odd";
}

// stabilisco se la somma dei due numeri è pari o dispari 


var risultato = isEven(sommatoria);
console.log(risultato);

// STABILISCO CHI HA VINTO 


if (risultato == even_Odd) {
    document.getElementById('stampa').innerHTML = "You win!";
} else {
    document.getElementById('stampa').innerHTML = "You lost :( ";
}



var calcAge = function () {
    /*il nome della variabile diventa una funzione. 
    Questa funzione è valida solo per il codice che viene dopo di essa. 
    Non puù essere invocata prima di essere creata.*/
}


// Funzione anonima in event Listener || Non può essere usata da sola
document.getElementById('button').addEventListener('click', function () {
    // esegui codice 
});


