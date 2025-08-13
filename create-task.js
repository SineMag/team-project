let tasks = [];
let nextId = 1;

const db = require('./database');
function addTask(title, description, status) {
    const sql = `INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)`;
    db.run(sql, [title, description, status], function(err) {
        if (err) return console.error(err.message);
        console.log(`Task added with ID: ${this.lastID}`);
    });
}