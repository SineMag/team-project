<img src="https://socialify.git.ci/SineMag/team-project/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="team-project" width="640" height="320" />

# Team-project

## Task List
____
* Scrum master is Mpumelelo.
* Melokuhle is our Researcher.
* Shantela is doing Delete.
* Ntombenhle is doing Update.
* Bongeka is doing Read.
* Sinenhlanhla is doing Create.




 # Task Manager with SQLite3

## Project Overview
This project is a **Node.js task manager** that uses **SQLite3** as a persistent database for storing tasks. It allows users to **add, view, update, and delete tasks** via a command-line interface (CLI). Each task has a **title, description, status**, and optional **timestamps** to track creation and updates.

The project was completed as a **collaborative group assignment** to practice CRUD operations, database integration, and version control using Git and GitHub.

---

## Features

### Core Features
- Add tasks with title, description, and status.
- View all tasks stored in the SQLite database.
- Update tasks (title, description, and/or status).
- Delete tasks by ID.
- Persistent storage using `tasks.db`.

### Optional Enhancements
- **Task Filtering:** View tasks by status (e.g., `completed`, `pending`).
- **Timestamps:** `created_at` and `updated_at` columns for tracking.
- **CLI Interface:** Interactive terminal experience using Inquirer.
- **Input Validation:** Prevents empty or invalid entries.

---

## Database Schema

```sql
CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'pending',

);
