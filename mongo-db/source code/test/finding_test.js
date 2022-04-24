// const mocha = require('mocha')
const assert = require("assert");
const MarioChar = require("../models/mariochar");

// Describe tests
describe("Finding records", function () {
    let char;

    beforeEach(function (done) {
        char = new MarioChar({
            name: "Mario",
        });
        char.save().then(function () {
            done();
        });
    });

    it("Finds a record from the database", function (done) {
        MarioChar.findOne({ name: "Mario" }).then(function ({ name }) {
            assert(name === "Mario");
            done();
        });
    });
    it("Finds a record by id from the database", function (done) {
        MarioChar.findOne({ _id: char._id }).then(function ({ id }) {
            assert(id === char.id);
            done();
        });
    });
});
