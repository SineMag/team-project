function viewTasks() {
  db.all(`SELECT * FROM tasks`, [], (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach((row) => {
      console.log(`${row.id}: ${row.title} - ${row.status}`);
    });
  });
}

viewTasks();
