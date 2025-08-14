
const db = require('./database'); 

function addTask(title, description) {
    const sql = `INSERT INTO tasks (title, description) VALUES (?, ?)`;
    db.run(sql, [title, description], function(err) {
        if (err) return console.error(err.message);
        console.log(`:white_tick: Task added with ID: ${this.lastID}`);
    });
}
function viewTasks() {
    const sql = `SELECT * FROM tasks`;
    db.all(sql, [], (err, rows) => {
        if (err) return console.error(err.message);
        if (rows.length === 0) return console.log(":open_file_folder: No tasks found.");
        rows.forEach(row => {
            console.log(`#${row.id} | ${row.title} | ${row.description} | Status: ${row.status}`);
        });
    });
}
function updateTask(id, newStatus) {
    const sql = `UPDATE tasks SET status = ? WHERE id = ?`;
    db.run(sql, [newStatus, id], function(err) {
        if (err) return console.error(err.message);
        if (this.changes === 0) return console.log(`:warning: No task found with ID ${id}`);
        console.log(`:pencil2: Updated task ${id} to status '${newStatus}'`);
    });
}
function deleteTask(id) {
    const sql = `DELETE FROM tasks WHERE id = ?`;
    db.run(sql, [id], function(err) {
        if (err) return console.error(err.message);
        if (this.changes === 0) return console.log(`:warning: No task found with ID ${id}`);
        console.log(`:recycling_bin: Deleted task with ID: ${id}`);
    });
}

// --- Command Handler ---
const [,, action, ...args] = process.argv;
switch (action) {
    case "add":
        if (args.length < 2) {
            console.log("Usage: node task-manager.js add \"Title\" \"Description\"");
            break;
        }
        addTask(args[0], args[1]);
        break;
    case "view":
        viewTasks();
        break;
    case "update":
        if (args.length < 2) {
            console.log("Usage: node task-manager.js update <id> <newStatus>");
            break;
        }
        updateTask(args[0], args[1]);
        break;
    case "delete":
        if (args.length < 1) {
            console.log("Usage: node task-manager.js delete <id>");
            break;
        }
        deleteTask(args[0]);
        break;
    default:
}