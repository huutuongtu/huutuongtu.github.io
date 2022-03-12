var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'pw',
});

connection.connect(function(err) {
      if (err) throw err;

      console.log('Connection Successful');
});


connection.query('USE database_nmcnpm_nhom1', function(err) {
  if (err) throw err;

  console.log('Query Successful');
  selectall();
})
function selectall(){
    connection.query('SELECT * FROM database_nmcnpm_nhom1.users;', function(err,results) {
    if (err) throw err;
  
    console.log(results)
  })
}

;