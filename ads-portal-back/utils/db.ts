import { createPool } from 'mysql2/promise';
import 'dotenv/config'

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'adds_portal',
    namedPlaceholders: true,
    decimalNumbers: true
})