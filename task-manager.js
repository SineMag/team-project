<<<<<<< HEAD
=======
// let tasks = [];
// let nextId = 1;

// function createTask(taskName) {
//     const task = {
//         id: nextId++,
//         taskName: taskName
//     };
//     tasks.push(task);
//     console.log(`Task created: [${task.id}] ${task.taskName}`);
// }

// function readTasks() {
//     if (tasks.length === 0) {
//         console.log("No tasks available.");
//     } else {
//         console.log("Current Tasks List:");
//         tasks.forEach(task => {
//             console.log(`[${task.id}] ${task.taskName}`);
//         });
//     }
// }


// function updateTask(taskName) {
//     const task = {
//         id: nextId++,
//         taskName: taskName
//     };
//     tasks.push(task);
//     console.log(`Task created: [${task.id}] ${task.taskName}`);
// }


// function deleteTask(taskName) {
//     const task = {
//         id: nextId++,
//         taskName: taskName
//     };
//     tasks.push(task);
//     console.log(`Task created: [${task.id}] ${task.taskName}`);
// }


// const action = process.argv[2];
// const taskName = process.argv[3];

// if (action === "create") {
//     if (!taskName) {
//         console.log("No tasks has been added");
//     } else {
//         createTask(taskName);
//         readTasks();
//     }
// } else if (action === "read") {
//     readTasks();
// } else {
//     console.log("Try again");
// }


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./tasks.db', (err) => {
    if (err) console.error(err.message);
    else console.log('Connected to tasks database.');
});
module.exports = db;



const db = require("./database");

function createTask(name) {
  db.run(`INSERT INTO tasks (name) VALUES (?)`, [name], function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log("Task added with ID:", this.lastID);
  });
}
>>>>>>> 625a99ef104fee074f4c79216c9bbef73344c900
