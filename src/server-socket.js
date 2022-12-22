import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Um cliente se conectou!");
    socket.on("texto_editor", (texto) => {
        console.log(texto);
    });
});