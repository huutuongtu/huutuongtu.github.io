var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'Tudeptrai1',
});


// function get_info(data, callback){
      
  var sql = "SELECT * FROM database_nmcnpm_nhom1.users";

//   connection.query(sql, function(err, results){
//         if (err){ 
//           throw err;
//         }
//         console.log(results[0].objid); // good
//         stuff_i_want = results[0].objid;  // Scope is larger than function

//         return callback(results[0].objid);
// })
// }
var rows
connection.query(sql, x = function(error, results, fields) {
  if(error) {
      console.log(error);
      return;
  }
  var rows = JSON.parse(JSON.stringify(results[0]));

  // here you can access rows
  return rows
}).rows;
console.log(x)