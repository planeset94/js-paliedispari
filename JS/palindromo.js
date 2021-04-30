// Palidroma:
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// 1) Chiedo all'utende una parola 
// var user_word = prompt('Tell me a word');


// 2) definisco la lunghezza della parola 
// var leng = user_word.length;

// 3) trovo metà lunghezza (arrotondando per difetto)
// var half_leng = Math.floor((user_word.length)/ 2);


/**
 * 
 * @param {*} parola_utente : è la parola da analizzare. 
 * @returns La funzione restituisce un valore vero o falso, a seconda che parola_utente sia palidroma o meno. 
 */

/*
function isPalindromo(parola_utente) {
    var leng = parola_utente.length;
    var half_leng = Math.floor(leng / 2);
    var palindromo = false;
    for (var i = 0; i < half_leng; i++) {

        var lett_left = parola_utente.charAt(i);
        var lett_right = parola_utente.charAt(leng - (i + 1));
        if (lett_left == lett_right) {
            palindromo = true;
        }
    }

    return palindromo;
}

var risultato = isPalindromo(user_word);
if (risultato) {
    document.getElementById('stampa_palindromi').innerHTML = "<strong>Congratulations!!</strong> The word you entered is palindrome";
} else {
    document.getElementById('stampa_palindromi').innerHTML = "The word you entered <strong> IS NOT </strong> palindrome";
}

*/

// ALTERNATIVA FABIO

function isPalindrome(word) {
    var reverseWord = word.split('').reverse().join('');
    if (reverseWord == word) {
        return true;
    }

}


console.log(isPalindrome('OVATTAVO'));