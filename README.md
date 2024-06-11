# nodejs-cloud-app

# Node.js Cloud App

Este projeto é uma aplicação simples em Node.js que acessa um banco de dados MySQL para listar os dados de uma tabela. A aplicação foi containerizada com Docker para facilitar a execução e implantação.

## Configuração e Execução

### Requisitos

- Docker instalado

### Passos

1. **Executar o Banco de Dados MySQL:**

   Execute o seguinte comando para iniciar um contêiner MySQL:

   ```sh
   docker run -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=user -e MYSQL_PASSWORD=123456 -e MYSQL_DATABASE=db_aula mysql:5.7
   

2. **Acessar o Container do MySQL e Inicializar o Banco de Dados:**

   Utilize o seguinte comando para acessar o contêiner MySQL e inicializar o banco de dados com a tabela e dados de exemplo:

   ```sh
   docker exec -it mysql mysql -uuser -p123456 db_aula < seed.js
   Executar a Aplicação Node.js:
   

3. **Execute o seguinte comando para iniciar a aplicação Node.js:**

   ```sh
   docker run -p 3000:3000 --name nodejs-cloud-app -d LilyanGoncalves/nodejs-cloud-app:latest
   

4. **Acessar a Aplicação:**

Acesse a aplicação em http://localhost:3000/consulta-dados para ver os dados da tabela.


5. **Links Úteis:**

GitHub: https://github.com/LilyanGoncalves/nodejs-cloud-app
DockerHub: https://hub.docker.com/repository/docker/LilyanGoncalves/nodejs-cloud-app