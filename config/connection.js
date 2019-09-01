// set up mysql connection
const mysql = require('mysql');
const keys = require('./keys');

// set up variable to store connection
let connection;

// database add on for Heroku
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // connection details
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: keys.password,
        database: "burger_db"
    });
}

//make connection
connection.connect(function (err) {
    if (err) {
        console.log("error connection: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

// export connection
module.exports = connection;