const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configurações do banco de dados
const dbConfig = {
  host: 'mysql',
  port: 3306,
  user: 'user',
  password: '123456',
  database: 'db_aula',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

// Endpoint de consulta de dados
app.get('/consulta-dados', (request, response) => {
  pool.getConnection((err, connection) => {
    if (err) {
      return response.status(500).json({ error: err.message });
    }

    connection.query('SELECT * FROM Clientes', (error, results) => {
      connection.release(); 

      if (error) {
        return response.status(500).json({ error: error.message });
      }
      response.json(results);
    });
  });
});

// Endpoint de liveness
app.get('/liveness', (req, res) => {
  res.status(200).send('OK');
});

// Endpoint de readiness
app.get('/readiness', (req, res) => {
  connection.ping((err) => {
    if (err) {
      return res.status(500).send('Not Ready');
    }
    res.status(200).send('Ready');
  });
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
