import sqlite3 from "better-sqlite3";
const db = new sqlite3("database.db");

export default function handler(req) {
  try {
    // Initialize the database connection
 
    // Execute the query to delete all rows from the table
    const stmt = db.prepare(`DELETE FROM contacts`);
    const info = stmt.run();

    // console.log(`Table cleared successfully. Rows affected: ${info.changes}`);
    db.close();
  } catch (error) {
    console.error("Database error while clearing table:", error.message);
  }
}

// Call the function to clear the table
