import express from 'express';
import path from 'path';
import url from 'url';

const app = express();

const porta = process.env.porta || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));
app.listen(porta, () => console.log(`Servidor Rodando na porta: ${porta}`));