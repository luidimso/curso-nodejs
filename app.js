import express from "express";
import booksRoutes from './routes/books.route.js';
import morgan from 'morgan';

const server = express();
const PORT = 3000;

const createUrl = (version, path) => "/api/"+version+"/"+path;
const BOOKS_URL = createUrl("v1", "books");

server.use(express.json());
server.use(morgan("tiny"));
server.use(BOOKS_URL, booksRoutes);

server.listen(PORT, () => {
    console.log("Server running on port "+PORT);
});