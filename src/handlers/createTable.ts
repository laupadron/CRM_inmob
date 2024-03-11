// createTable.ts
import pool from "../db.ts";

const connection = await pool.connect();

export default async function createTable() {
    await connection.queryObject`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL
      )
    `;
  }

