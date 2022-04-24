const assert = require("assert");
const Author = require("../models/author");
const mongoose = require("mongoose");

describe("Nesting records", () => {
    beforeEach((done) => {
        mongoose.connection.collections.authors.drop(() => done());
    });

    it("Nests a record", (done) => {
        const author = new Author({
            name: "Dexter",
            age: 28,
            books: [{ name: "Dexter's Journey", pages: 500 }],
        });

        author.save().then(() => {
            Author.findOne({ name: "Dexter" }).then((record) => {
                if (record.books.length === 1) done();
            });
        });
    });

    it("Adds a new book to an author", (done) => {
        const author = new Author({
            name: "Dexter",
            age: 28,
            books: [{ name: "Dexter's Journey", pages: 500 }],
        });
        author.save().then(() => {
            Author.findOne({ name: "Dexter" }).then((result) => {
                result.books.push({ name: "Dexter's Lovelife", pages: 4000 });
                result.save().then(() => {
                    Author.findOne({ name: "Dexter" }).then((record) => {
                        assert(record.books.length === 2);
                        done();
                    });
                });
            });
        });
    });
});
