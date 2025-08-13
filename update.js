function updateTask(id, newStatus) {
  const sql = `UPDATE tasks SET status = ? WHERE id = ?`;
  db.run(sql, [newStatus, id], function (err) {
    if (err) return console.error(err.message);
    console.log(`Updated task ${id} to status '${newStatus}'`);
  });
}
