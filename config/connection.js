var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: 'root',
    user: 'root',
    password: '9kio8822',
    database: 'w8eq483o13sjf0z8'
});
// console.log("mysql connected");


connection.connect(function(err) {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
