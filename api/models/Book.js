const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    // Mongoose will automatically create a unique ID for each book
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: [true, 'Please add the Book title'],
        trim: true,
        maxLength: [100, 'Title cannot be more than 100 characters']
    },
    author: {
        type: String,
        required: [true, 'Please add the Author name'],
        trim: true,
        maxLength: [50, 'Name cannot be more than 50 characters']
    },
    description: {
        type: String,
        required: [false, 'Please add a description'],
        maxLength: [500, 'Description cannot be more than 500 characters'],
    },
});

module.exports = mongoose.model('Book', bookSchema);