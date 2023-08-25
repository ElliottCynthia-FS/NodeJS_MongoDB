const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Author = require("../models/Author");
const {
    getAuthor,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor
} = require("../controllers/authorController");

//* New code after Controller was created
router.get("/", getAuthor);

router.get("/:id", getAuthorById);

router.post("/", createAuthor);

router.put("/:id", updateAuthor);

router.delete("/:id", deleteAuthor);

//* Original code before Controller was created
// router.get("/", (req, res, next) => {
//     res
//     .status(200)
//     .json({
//         status: "success",
//         message: `${req.method} - Author request made`,
//     });
// });

// router.post("/", (req, res, next) => {
//     res
//     .status(200)
//     .json({
//         status: "success",
//         message: `${req.method} - Author addition made`,
//     });
// });

// router.get("/:id", (req, res, next) => {
//     const { id } = req.params;
//     res
//     .status(200)
//     .json({
//         id,
//         status: "success",
//         message: `${req.method} - Author by Id request made`,
//     });
// });

// router.put("/:id", (req, res, next) => {
//     const { id } = req.params;
//     res
//     .status(200)
//     .json({
//         id,
//         status: "success",
//         message: `${req.method} - Author update by Id made`,
//     });
// });

// router.delete("/:id", (req, res, next) => {
//     const { id } = req.params;
//     res
//     .status(200)
//     .json({
//         id,
//         status: "success",
//         message: `${req.method} - Author deletion by Id made`,
//     });
// });

module.exports = router;