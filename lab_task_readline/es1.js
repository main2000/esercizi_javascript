"use strict";
const readlineSync = require('readline-sync');
const readline = require('readline');
const { stdin } = require('process');
const { start } = require('repl');

function Task(description, important = false, shared = false, deadline = false) {

    return {
        description, important, shared, deadline
    };

};

const todoManager = {
    task: [],

    addTask() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Descrizione del task: ', (description) => {
            rl.question('Importante? (si/no): ', (importantAnswer) => {
                const important = importantAnswer.toLowerCase() === 'si';
                rl.question('Condiviso? (si/no): ', (sharedAnswe) => {
                    const shared = sharedAnswe.toLowerCase() === 'si';
                    rl.question('Scadenza (yyyy-mm-dd hh:mm, opzionale): ', (deadline) => {
                        const task = Task(description, important, shared, deadline || null);
                        this.tasks.push(task);
                        console.log(`Task "${description}" aggiunto.`);
                        rl.close();
                    });
                });
            });
        });
    },

    removeTask() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Descrizione del task da rimuovere: ', (description) => {
            const index = this.task.findIndex((task) => task.description === description);
            if (index !== -1) {
                this.tasks.splice(index, 1);
                console.log(`Task "${description}" rimosso.`);
            } else {
                console.log(`Task "${description}" non trovato.`);
            }
            rl.close();
        });
    },

    showTask() {
        const sortedTasks = [...this.tasks].sort((a, b) => a.description.localeCompare(b.description));
        sortedTasks.forEach((task) => {
            console.log(`- ${task.description} (${task.important ? 'importante' : 'non importante'},
            ${task.shared ? 'condiviso' : 'privato'}, ${task.deadline || 'nessuna scadenza'})`);
        });
    },

    start() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        console.log('benvenuto nel todo-manager');
        this.showMenu();
        rl.on('line', (line) => {
            switch (line) {
                case '1':
                    this.addTask();
                    break;
                case '2':
                    this.removeTask();
                    break;
                case '3':
                    this.showTask();
                    break;
                case '4':
                    console.log('chiudi il programma');
                    r1.close();
                default:
                    console.log('scelta non valida');
                    this.showMenu();
                    break;
            }
        });
    },

    showMenu(){
        console.log("cosa vuoi fare?");
        console.log('1. inserire un nuovo task');
        console.log("2. rimuovere un task");
        console.log("3. mostrare tutti i task");
        console.log("4. Chiudere il programma");
    }
};

//avvio 

todoManager.start();