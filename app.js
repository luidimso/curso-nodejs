import express from "express";

const server = express();
const PORT = 3000;

server.listen(PORT, () => {
    console.log("Server running on port "+PORT);
});

server.get('/', (req, resp) => {
    resp.send("Testing");
});