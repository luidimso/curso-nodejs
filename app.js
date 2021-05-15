import express from "express";
import books from './data/books.json';

const server = express();
const PORT = 3000;

const createUrl = (version, path) => "/api/"+version+"/"+path;

server.listen(PORT, () => {
    console.log("Server running on port "+PORT);
});

server.get(createUrl("v1", "books"), (req, resp) => {
    resp.json(books);
});