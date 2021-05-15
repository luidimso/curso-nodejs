import express from "express";
import books from "../data/books.json";

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
    console.log(req.body)
    resp.end();
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