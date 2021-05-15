import express from "express";
import books from './data/books.json';

const server = express();
const PORT = 3000;

const createUrl = (version, path) => "/api/"+version+"/"+path;
const BOOKS_URL = createUrl("v1", "books");

server.listen(PORT, () => {
    console.log("Server running on port "+PORT);
});

server.get(BOOKS_URL, (req, resp) => {
    resp.json(books);
});

server.post(BOOKS_URL, (req, resp) => {
    console.log("Testing")
});

server.put(BOOKS_URL, (req, resp) => {
    console.log("Testing")
});

server.delete(BOOKS_URL, (req, resp) => {
    console.log("Testing")
});