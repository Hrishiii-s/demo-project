import sqlite3 from 'better-sqlite3';

// Initialize the database
const db = new sqlite3('database.db');

// Create tables if they do not exist
db.prepare(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone INTEGER NOT NULL,
    message TEXT NOT NULL
  )
`).run();

console.log("Database initialized with 'contacts' table");
db.close();
