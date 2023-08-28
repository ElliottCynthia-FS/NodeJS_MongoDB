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
    // Add code to see if Book exists
    Book.find({ 
        title: req.body.title, 
        author: req.body.author 
    })
    // .then() is not a promise, so need to add .exec() to make it a promise
    // this will allow you to .then() and .catch()
    .exec()
    .then(result => {
        console.log(result);
        // Post is going to return back result and result is going to be an array
        if(result.length > 0) {
            return res.status(409).json({
                message: "Book already exists"
            })
        }
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
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({
            error: {
                message: "Unable to save book with title: " 
                + req.body.title 
                + " by author: " 
                + req.body.author,
            }
        })
    })
});

//* This was the original code for POST before Schema was created
    // router.post("/", (req, res, next) => {
    //res.json({
        //message: "Books - POST"
    //});

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