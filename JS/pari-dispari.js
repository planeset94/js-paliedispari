// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var even_Odd = prompt('Choose: even or odd. Write it here please').toLowerCase();
console.log(even_Odd);
var user_Number = parseInt(prompt('Enter a number between 1 and 5'));
console.log(user_Number);
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function random_Function() {
    return parseInt(Math.random() * 5);
}
var computer_Number = random_Function();
console.log("numero computer " + computer_Number);

// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
var sommatoria = computer_Number + user_Number;
// console.log(sommatoria);


function isEven(num) {
    var outcome = false;

    if (num % 2 == 0) {
        outcome = true;
    }
    return outcome;
}

// stabilisco se la somma dei due numeri è pari o dispari 


var risultato;
if (isEven(sommatoria)) {
    risultato = "even";
} else {
    risultato = "odd";
}
console.log(risultato);

// STABILISCO CHI HA VINTO 


if (risultato == even_Odd) {
    document.getElementById('stampa').innerHTML = "You win!";
} else {
    document.getElementById('stampa').innerHTML = "You lost :( ";
}




