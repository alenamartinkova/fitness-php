import mysql from 'mysql';

// Create a connection pool. Adjust the pool settings as needed.
const pool = mysql.createPool({
    connectionLimit: 10, // the maximum number of connections to create at once
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

// Utility function to query the database
export async function executeQuery({ query, values = [] }) {
    return new Promise((resolve, reject) => {
        pool.query(query, values, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}
