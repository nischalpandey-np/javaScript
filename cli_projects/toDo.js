prompt = require("prompt-sync")();

let task = [];
let run = true;

function addTask() {
    let add = prompt("Enter new task : ");
    task.push(add);
    console.log(`Task ${add} added succesfully`);
}

function deleteTask() {
    viewTask();
    let del_index = Number(prompt(`Choose task number to delete: `));
    if (del_index < 1 || del_index > task.length) {
        console.log("Invalid index!");
        return;
    }

    // splice(start, deleteCount, ...items) → Remove/replace elements
    let removed = task.splice(del_index - 1, 1);
    console.log(removed[0], "deleted succesfully");
}

function viewTask() {
    console.log("\n");
    if (task.length === 0) {
        console.log("No tasks available.");
        return;
    } else {
        for (let i = 0; i < task.length; i++) {
            console.log(i + 1, `.${task[i]}\n`);
        }
    }
}

function editTask() {
    viewTask();
    let edit_index = Number(prompt(`Choose task number: `));
    if (edit_index < 1 || edit_index > task.length) {
        console.log("Invalid index!");
        return;
    }

    let new_task = prompt("Type edited task: ");
    let edited = task.splice(edit_index - 1, 1, `${new_task}`);
    console.log(`${edited[0]} edited to ${new_task} succesfully.`);
}

while (run) {
    let Again = prompt("Welcome back,Press 'Y' to enter app 'Q' to quit app: ");
    if (Again.toLowerCase() !== "q") {
        let choice = prompt(
            "Please enter your choice 1. Add , 2. View , 3. Delete , 4. Edit :(1-4) "
        );
        switch (choice) {
            case "1":
                addTask();
                break;
            case "2":
                viewTask();
                break;
            case "3":
                deleteTask();
                break;

            case "4":
                editTask();
                break;
        }
    } else {
        run = false;
    }
}
