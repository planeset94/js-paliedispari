// Palidroma:
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// 1) Chiedo all'utende una parola 
var user_word = prompt('Tell me a word');

// 2) definisco la lunghezza della parola 
var leng = user_word.length;
console.log(leng);
// 3) trovo metà lunghezza (arrotondando per difetto)
var half_leng = Math.floor(leng / 2);
console.log(half_leng);



var palindromo = false;
for (var i = 0; i < half_leng; i++) {

    var lett_left = user_word.charAt(i);
    var lett_right = user_word.charAt(leng - (i + 1));
    if (lett_left == lett_right) {
        palindromo = true;
    }



}

console.log(palindromo);