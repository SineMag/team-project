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
function viewTasks() {
    db.all(`SELECT * FROM tasks`, [], (err, rows) => {
        if (err) return console.error(err.message);
        rows.forEach(row => {
            console.log(`${row.id}: ${row.title} - ${row.status}`);
        });
    });
}
function updateTask(id, newStatus) {
    const sql = `UPDATE tasks SET status = ? WHERE id = ?`;
    db.run(sql, [newStatus, id], function(err) {
        if (err) return console.error(err.message);
        console.log(`Updated task ${id} to status '${newStatus}'`);
    });
}
function deleteTask(id) {
    const sql = `DELETE FROM tasks WHERE id = ?`;
    db.run(sql, [id], function(err) {
        if (err) return console.error(err.message);
        console.log(`Deleted task with ID: ${id}`);
    });
}
addTask();
viewTasks();
updateTask();
deleteTask();