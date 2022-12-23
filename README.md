# alura-docs-websocket-mongodb
Curso da Alura de WebSockets: implemente comunicações em tempo real com Socket.IO e MongoDB


## Dependencias
* Express
* Socket.io


## Como usar ?
Verifique se tem o nodejs instalado
```bash
node -v
```
Depois instalar as dependencias do projeto com o comando
```bash
npm install
```


## Executando o projeto
Para executar o projeto com o nodemon
```bash
npm run dev
```
Para executar o projeto com o node
```bash
npm start
```

### 
Após rodar o projeto 
abrir o navegador em http://localhost:3000


### Instalar mongodb com docker
execute o comando
```bash
docker run --name mongo -d -p 27017:27017  mongo:latest
```
criar usuário no mongo db
```bash
db.createUser({ user:"alura",pwd:passwordPrompt(),roles:[{role:"readWrite", db:"alura-websockets"}]})   
```