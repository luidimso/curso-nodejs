import express from "express";
import books from "../data/books.json";
import fs from 'fs';

const router = express.Router();

router.param("id", (req, res, next, id) => {
    if(isNaN(id)) {
        next("ID is not a number");
    } else {
        next();
    }
});

router.get("/", (req, resp) => {
    resp.json(books);
});

router.get("/:id", (req, resp) => {
    const book = books.find(value => value.id == req.params.id);

    if(book) {
        resp.json(book);
    } else {
        resp.send("Book not found");
    }
});

// router.get("/test", (req, resp, next) => {
//     resp.send("Testing")
//     next();
// }, (req, resp) => {
//     console.log("Testing 2")
// });

router.post("/", (req, resp) => {
    books.push(req.body);
    fs.writeFileSync("./data/books.json", JSON.stringify(books));
    resp.status(200).send("OK");
});

router.put("/", (req, resp) => {
    console.log("Testing")
    resp.end();
});

router.delete("/", (req, resp) => {
    console.log("Testing")
    resp.end();
});

export default router;