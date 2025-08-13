function deleteTask(id) {
    const sql = `DELETE FROM tasks WHERE id = ?`;
    db.run(sql, [id], function(err) {
        if (err) return console.error(err.message);
        console.log(`Deleted task with ID: ${id}`);
    });
}

