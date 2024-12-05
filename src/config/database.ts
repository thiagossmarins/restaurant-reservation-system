import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'thiago',
  password: 'Thiago#1010',
  database: 'restaurant',
});

export const promisePool = pool.promise();