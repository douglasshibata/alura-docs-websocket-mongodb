import express from 'express';
import path from 'path';
import url from 'url';
import { Server } from "socket.io";
import http from 'http';

const app = express();
const porta = process.env.porta || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));
const servidorHttp = http.createServer(app);

servidorHttp.listen(porta, () => console.log(`Servidor escutando na porta ${porta}`));
const io = new Server(servidorHttp);
export default io;