"use strict";

const readlineSync = require('readline-sync');

/* // Wait for user's response.
let userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!'); */

const arr = [];

let continuaInserimento = true;

while (continuaInserimento) {

    let inserisci_stringa = readlineSync.question('inserisci stringa: ');
    if (inserisci_stringa === 'annulla') {
        continuaInserimento = false;
    }
    else {
        arr.push(inserisci_stringa);
    }

}


console.log(arr);
console.log();
console.log();

let nuovoArray = [];
arr.forEach((inserisci_stringa, i) => {
    if (inserisci_stringa.length <= 2) {
        nuovoArray.push(arr[i] = '');
    }
    else {
        let substr = inserisci_stringa.slice(0, 2) + inserisci_stringa.slice(-2);
        nuovoArray.push(substr);
        console.log();
        console.log(substr);
    }

});
console.log(nuovoArray);



