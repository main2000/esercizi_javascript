'use strict';

const readline = require("readline-sync");

let Task = [];

function addTask() {

    let description = readlineSync.question("Inserisci una descrizione: ");
    console.log(description);
    
    let importante = readlineSync.question("è importante? [y/n]:");
    console.log(importante);

    let privato = readlineSync.question("è importante? [y/n]:");
    console.log(importante);

    let scadenza = readlineSync.question("inserisci una data nel formato AAAA-MM-GG: ");
    console.log(scadenza);

}

console.log("1 - Insert a new task");
console.log("2 - Delete by description");
console.log("3 - Delete by scadenza");
console.log("4 - Delete by scadenza");
console.log("5 - Exit");

let choice = readlineSync.question("");

switch (choice) {
    case 1:
        
        break;

    default:
        break;
}
