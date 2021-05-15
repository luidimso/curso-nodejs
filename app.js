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

server.get(BOOKS_URL+"/:id", (req, resp) => {
    const book = books.find(value => value.id == req.params.id);

    if(book) {
        resp.json(book);
    } else {
        resp.send("Book not found");
    }
});

server.get("/test", (req, resp, next) => {
    resp.send("Testing")
    next();
}, (req, resp) => {
    console.log("Testing 2")
});

server.post(BOOKS_URL, (req, resp) => {
    console.log("Testing")
    resp.end();
});

server.put(BOOKS_URL, (req, resp) => {
    console.log("Testing")
    resp.end();
});

server.delete(BOOKS_URL, (req, resp) => {
    console.log("Testing")
    resp.end();
});