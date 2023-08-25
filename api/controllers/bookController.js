const Book = require('../models/Book');
exports.getBook = async (req, res) => {
    res
    .status(200)
    .json({
        status: "success",
        message: `${req.method} - Book request made`,
    });
};

exports.getBookById = async (req, res) => {
    const { id } = req.params;
    res
    .status(200)
    .json({
        id,
        status: "success",
        message: `${req.method} - Book by Id request made`,
    });
};

exports.createBook = async (req, res) => {
    const { book } = req.body;
    const newBook = await Author.create(book);
    res.status(200).json({
        data: newBook,
        status: "success",
        message: `${req.method} - Book addition made`,
    });
};

exports.updateBook = async (req, res) => {
    const { id } = req.params;
    res
    .status(200)
    .json({
        id,
        status: "success",
        message: `${req.method} - Book update by Id made`,
    });
};

exports.deleteBook = async (req, res) => {
    const { id } = req.params;
    res
    .status(200)
    .json({
        id,
        status: "success",
        message: `${req.method} - Book deletion by Id made`,
    });
};

//* Use this if syntax is "const getBook = async....." etc
/* 
module.exports = {
    getBook,
    getBookById,
    createBook,
    updateBook,
    deleteBook
}
*/