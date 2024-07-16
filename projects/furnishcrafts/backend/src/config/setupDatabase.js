import pkg from 'pg';
const { Client } = pkg;
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });


async function createDatabase() {
    const client = new Client({
        user: process.env.DB_MAIN_USER,
        password: process.env.DB_MAIN_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_MAIN_NAME,
    });

    try {
        await client.connect();
        console.log("Connected to the PostgreSQL server");

        const res = await client.query(`SELECT 1 FROM pg_database WHERE datname = '${process.env.DB_NAME}'`);
        if (res.rowCount > 0) {
            console.log(`Database ${process.env.DB_NAME} already exists`);
        } else {
            await client.query(`CREATE DATABASE ${process.env.DB_NAME}`);
            console.log(`Database ${process.env.DB_NAME} created successfully`);
        }

        await client.end();

        const dbClient = new Client({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
        });

        await dbClient.connect();
        console.log(`Connected to the database ${process.env.DB_NAME}`);

        const sqlFilePath = path.join(__dirname, '..', '..', '..', 'database', 'init.sql');
        const sql = fs.readFileSync(sqlFilePath).toString();
        const queries = sql.split(';').map(q => q.trim()).filter(q => q.length > 0);

        for (const queryText of queries) {
            await dbClient.query(queryText);
        }

        console.log("Database and tables created successfully");

        await dbClient.end();
    } catch (err) {
        console.error('Error creating database and tables', err.stack);
    }
}

createDatabase();
