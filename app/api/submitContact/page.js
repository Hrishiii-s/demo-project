// pages/api/submitContact.js
import sqlite3 from 'better-sqlite3';
import path from 'path';

// Set up SQLite database connection
const db = new sqlite3('database.db');

console.log("DB Path:", db);

export default function handler(req) {
        
    const encodedData = req.searchParams.data;
    const decodedData = JSON.parse(atob(encodedData)); // Decode Base64 and parse JSON

    const { name, email, phone, message } = decodedData;

    // try {
    //     // Query to retrieve all table names
    //     const tables = db.prepare(`
    //       SELECT name 
    //       FROM sqlite_master 
    //       WHERE type='table'
    //     `).all();
      
    //     // Log the table names
    //     console.log('Tables in the database:', tables);
    //   } catch (error) {
    //     console.error('Error fetching tables:', error.message);
    //   }

    // if (req) {
    //     console.log("Received Request Method:", req.method);
    //     console.log("Request Headers:", req.headers);
    //     console.log("Request Body:", req.body);
    // } else {
    //     console.error("No request object found");
    //     console.log({ error: "No request object found" });
    //     return;
    // }

    // // Ensure it's a POST request
    // if (req.method === 'POST') {
    //     const { name, email, phoneNumber, message } = req.body;

    //     if (!name || !email || !phoneNumber || !message) {
    //         console.error("Incomplete data received:", { name, email, phoneNumber, message });
    //         console.log({ error: "All fields are required" });
    //         return;
    //     }

        try {
            const stmt = db.prepare(`
                INSERT INTO contacts (name, email, phone, message) 
                VALUES (?, ?, ?, ?)
            `);
            stmt.run(name, email, phone, message);

            console.log({ message: "Contact saved successfully" });
        } catch (error) {
            console.error("Database error:", error);
            console.log({ error: "Failed to save contact" });
        }
    // } else {
    //     console.log(`Method ${req.method} Not Allowed`);

    // }
}
