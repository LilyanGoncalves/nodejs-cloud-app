const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configurações do banco de dados
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3307,  // Porta configurada para conexão com MySQL no container
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'passwd',
  database: process.env.DB_NAME || 'db_aula'
};

const connection = mysql.createConnection(dbConfig);

// Endpoint de consulta de dados
app.get('/consulta-dados', (req, res) => {
  connection.query('SELECT * FROM table_name', (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results);
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
