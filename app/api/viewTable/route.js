import sqlite3 from 'better-sqlite3';
import { NextResponse } from 'next/server';
import path from 'path';

const db = new sqlite3('database.db');

export  async function POST() {
  try {

    // Query to fetch all rows from the 'contacts' table
    const rows = db.prepare('SELECT * FROM contacts').all();
    console.log("ROWS",rows)

    // Return the rows as a JSON response
    // res.status(200).json({ data: rows });
 
    const plainRows = rows.map(row => JSON.parse(JSON.stringify(row)));
    
    console.log("plainRows",plainRows)
    // Return the rows as a JSON response
    return NextResponse.json({ data: rows });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch table data' });
  }
}


