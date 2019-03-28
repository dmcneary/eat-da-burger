var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burger_db"
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("Oh no! There was an error connecting: " + err.stack);
    return;
  }
  console.log("Connection success! Session number " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
