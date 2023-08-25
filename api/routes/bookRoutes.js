const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Book = require("../models/Book");

router.get("/", (req, res, next) => {
    res.json({
        message: "Books - GET"
    });
});

router.post("/", (req, res, next) => {
    const newBook = new Book({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        author: req.body.author
    });

    // Write to the database
    newBook.save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "Book created successfully",
                book: {
                    title: result.title,
                    author: result.author,
                    id: result._id,
                    metadata: {
                        method: req.method,
                        host: req.hostname,
                    }
                }
            })
        })
        .catch(err => {
            console.log(err.message);
            res.status(500).json({
                error: {
                    message: err.message,
                }
            })
        });
    
    // This was the original code before Schema was created
    //res.json({
        //message: "Books - POST"
    //});
});

router.get("/:id", (req, res, next) => {
    const { id } = req.params;
    res
    .status(200)
    .json({
        id,
        status: "success",
        message: `${req.method} - Books`,
    });
});

router.put("/:id", (req, res, next) => {
    const { id } = req.params;
    res
    .status(200)
    .json({
        id,
        status: "success",
        message: `${req.method} - Books`,
    });
});

router.delete("/:id", (req, res, next) => {
    const { id } = req.params;
    res
    .status(200)
    .json({
        id,
        status: "success",
        message: `${req.method} - Books`,
    });
});

/*  This was the original format from lesson:
router.delete("/:bookId", (req, res, next) => {
    const bookId = req.params.bookId;
    res.json({
        message: "Books - DELETE",
        id: "bookId"
    });
});
*/ 

module.exports = router;