// import { connect } from "http2";

var mysql = require("mysql");

var connection;
// Make connection.
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1187",
    database: "burgers_db"
  });
};

connection.connect();

module.exports = connection;



