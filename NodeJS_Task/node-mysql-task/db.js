const mysql = require('mysql2');


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root', 
    database: 'certificates_db'
});


module.exports = pool.promise();