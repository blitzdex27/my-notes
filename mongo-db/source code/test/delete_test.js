/**
 * Delete record test
 * - [1] Create and save a new record to the db
 * - [2] Use findOneAndRemove() to remove the record
 * - [3] Try to findOne in the db (the one we just removed)
 * - [4] Assert that the result is null
 */

const assert = require("assert");
const MarioChar = require("../models/mariochar");

// Describe tests
describe("Deleting records", function () {
    let char;

    beforeEach(function (done) {
        char = new MarioChar({
            name: "Mario",
        });
        char.save().then(function () {
            done();
        });
    });

    it("Deletes a record from the database", function (done) {
        MarioChar.findOneAndRemove(
            { name: "Mario" },
            { useFindAndModify: false }
        ).then(function () {
            MarioChar.findOne({ name: "Mario" }).then(function (result) {
                assert(result === null);
                done();
            });
        });
    });
});
