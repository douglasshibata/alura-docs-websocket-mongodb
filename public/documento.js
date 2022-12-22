import { emitirTextoEditor, selecionarDocumento } from "./socket-front.js";
const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");
const textoEditor = document.getElementById("editor-texto");
const tituloDocumento = document.getElementById("titulo-documento");

tituloDocumento.textContent = nomeDocumento || "Documento sem título";

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor({ texto: textoEditor.value, nomeDocumento });
});

function atualizaTextoEditor(texto) {
    textoEditor.value = texto;
}
selecionarDocumento(nomeDocumento);

export { atualizaTextoEditor };