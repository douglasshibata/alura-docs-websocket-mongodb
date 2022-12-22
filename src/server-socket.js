import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Um cliente se conectou!");
    socket.on("texto_editor", (texto) => {
        socket.broadcast.emit("texto_editor_clientes", texto);
    });
    socket.on("disconnect", (motivo) => {
        console.log(`Cliente "${socket.id}" desconectado!
        Motivo: ${motivo}`);
    });
});