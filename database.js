const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./tasks.db', (err) => {
    if (err) console.error(err.message);
    else console.log('Connected to tasks database.');
});
// Create table if not exists
db.run(`CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'pending'
)`, (err) => {
    if (err) console.error(err.message);
});
module.exports = db;

