const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: String,
    pages: Number,
});

const authorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    books: [bookSchema],
});

const Author = mongoose.model("author", authorSchema);

module.exports = Author;
