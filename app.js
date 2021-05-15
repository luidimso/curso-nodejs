import express from "express";
import booksRoutes from './routes/books.route.js';
import morgan from 'morgan';

const server = express();
const PORT = 3000;

const createUrl = (version, path) => "/api/"+version+"/"+path;
const BOOKS_URL = createUrl("v1", "books");

const jsonErrorHandler = async (err, req, res, next) => {
    res.status(500).send({ error: err });
}

server.use(express.json());
server.use(morgan("tiny"));
server.use(BOOKS_URL, booksRoutes);
server.use(jsonErrorHandler);

server.listen(PORT, () => {
    console.log("Server running on port "+PORT);
});