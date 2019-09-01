// set up mysql connection
const mysql = require('mysql');
const keys = require('./keys');

// connection details
const connection = mysql.createConnection({
    host: 'locahost',
    port: 3306,
    user: 'root',
    password: keys.password,
    database: ""
});

//make connection
connection.connect(function(err) {
    if(err) {
        console.log("error connection: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

// export connection
module.exports = connection;