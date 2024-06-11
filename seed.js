const mysql = require('mysql2');

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

const dropTableQuery = `
  DROP TABLE IF EXISTS customers;
`;

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(255),
    role VARCHAR(50),
    password VARCHAR(255)
  );
`;

const seedDataQuery = `
  INSERT INTO customers (name, age, phone, email, role, password) VALUES 
  ('Ana Silva', 30, '123-456-7890', 'ana.silva@example.com', 'admin', 'senha1'),
  ('Bruno Souza', 25, '234-567-8901', 'bruno.souza@example.com', 'user', 'senha2'),
  ('Carlos Oliveira', 35, '345-678-9012', 'carlos.oliveira@example.com', 'user', 'senha3'),
  ('Daniela Santos', 40, '456-789-0123', 'daniela.santos@example.com', 'user', 'senha4'),
  ('Eduardo Lima', 22, '567-890-1234', 'eduardo.lima@example.com', 'admin', 'senha5'),
  ('Fernanda Pereira', 29, '678-901-2345', 'fernanda.pereira@example.com', 'user', 'senha6'),
  ('Gabriel Costa', 33, '789-012-3456', 'gabriel.costa@example.com', 'user', 'senha7'),
  ('Helena Almeida', 28, '890-123-4567', 'helena.almeida@example.com', 'admin', 'senha8'),
  ('Igor Barbosa', 31, '901-234-5678', 'igor.barbosa@example.com', 'user', 'senha9'),
  ('Juliana Ferreira', 27, '012-345-6789', 'juliana.ferreira@example.com', 'user', 'senha10');
`;
pool.getConnection((err, connection) => {
  connection.connect(err => {
    if (err) {
      console.error('Error connecting to the database:', err);
      process.exit(1);
    }

    connection.query(dropTableQuery, (err) => {
      if (err) {
        console.error('Error dropping table:', err);
        process.exit(1);
      }

      connection.query(createTableQuery, (err) => {
        if (err) {
          console.error('Error creating table:', err);
          process.exit(1);
        }

        connection.query(seedDataQuery, (err) => {
          if (err) {
            console.error('Error seeding data:', err);
            process.exit(1);
          }

          console.log('Database initialized successfully.');
          process.exit(0);
        });
      });

    });
  });

  if (error) {
    return response.status(500).json({ error: error.message });
  }
  response.json(results);
});
