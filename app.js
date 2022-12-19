const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.static('public'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'eya0428',
    database: 'credit_calculation'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});
  
app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM all_subjects',
    (error, results) => {
      res.render('top.ejs',{subjects: results});
    }
  );
});

app.listen(3000);