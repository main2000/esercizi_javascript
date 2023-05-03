"use strict";

const readlineSync = require("readline-sync");

let Task = [];

function addTask(Task) {
  let description = readlineSync.question("Inserisci una descrizione: ");
  //console.log(description);

  let importante = readlineSync.question("è importante? [y/n]:");
  //console.log(importante);

  let privato = readlineSync.question("è importante? [y/n]:");
  //console.log(importante);

  let scadenza = readlineSync.question(
    "inserisci una data nel formato AAAA-MM-GG: "
  );
  //console.log(scadenza);

  const task = {
    description: description,
    importante: importante,
    private: privato,
    scadenza: scadenza,
  };
  Task.push(task);

  if (!Number.isNaN(scadenza.getTime())) {
    const now = new Date();
    setTimeout(
      function (task) {
        Task.splice(task.indexOf(task), 1);
      },
      scadenza.getTime() - now.getTime(),
      task
    );
  }
}

function removeTaskbyDescription(Task) {
  let remove = readline.question("inserisci descrizione da rimuovere: ");
  remove = new Date(remove);

  const toBeRemoved = [];

  for (const task in Task) {
    if (task.description === remove) {
      toBeRemoved.push(task);
    }
  }
  for (const removeTask of toBeRemoved) {
    Task.splice(Task.indexOf(removeTask), 1);
  }
}

function removeTaskByScadenza(Task) {
  let remove = readline.question("inserisci data: ");
  remove = new Date(remove);

  const toBeRemoved = [];

  for (const task in Task) {
    if (
      task.scadenza.getFullYear() === remove.getFullYear() &&
      task.scadenza.getFullMonth() === remove.getFullMoth() &&
      task.scadenza.getDay() === remove.getDay()
    ) {
      toBeRemoved.push(task);
    }
  }
  for (const removeTask of toBeRemoved) {
    Task.splice(Task.indexOf(removeTask), 1);
  }
}

function printTasks(Task) {
  Task.sort((a, b) => a.description.localCompare(b.description));
  console.log(Task);
}

function showMenu() {
  console.log("1 - Insert a new task");
  console.log("2 - Delete by description");
  console.log("3 - Delete by scadenza");
  console.log("4 - Show tasks");
  console.log("5 - Exit");
}

if (require.main === module) {
  const Task = [];

  const menu = setInterval(() => {
    showMenu();
    let scelta = readline.question("Your choice: ");

    switch (choice.trim()) {
      case "1":
        addTask(Task);
        break;
    
      case "2":
        removeTaskbyDescription(Task);
        break;
    
      case "3":
        removeTaskByScadenza(Task);
        break;
      
      case "4":
        printTask(Task);
        break;
    
      default:
        clearInterval(menu);
    }
  }, 500);
}
