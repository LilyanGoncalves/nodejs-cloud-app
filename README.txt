# Instruções para Executar a Aplicação

1. Execute o banco de dados MySQL:
   docker run -d --network app-network -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=user -e MYSQL_PASSWORD=123456 -e MYSQL_DATABASE=db_aula mysql:5.7

2. baixe a imagem mais recente
   docker pull lilyangoncalves/nodejs-cloud-app:latest

3. Execute a aplicação:
   docker run --network app-network -p 3000:3000 --name nodejs-cloud-app -d lilyangoncalves/nodejs-cloud-app:latest
   obs: caso precise remover a imagem rode o script 'docker rm nodejs-cloud-app'

4. Acesse a URL da aplicação:
   http://localhost:3000/consulta-dados

5. O link do GitHub é https://github.com/LilyanGoncalves/nodejs-cloud-app
   O link do DockerHub é https://hub.docker.com/repository/docker/lilyangoncalves/nodejs-cloud-app
