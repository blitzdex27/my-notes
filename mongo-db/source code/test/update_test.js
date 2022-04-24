/**
 * Updating Records
 * - [1] Create and save a new record to the db
 * - [2] Use findOneAndUpdate() to update the name of the record
 * - [3] Try to findOne in the db (the one we just updated)
 * - [4] Assert that the result has the updated property value
 */

const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("Update a record from the database", () => {
    let char;

    beforeEach((done) => {
        char = new MarioChar({
            name: "Mario",
            weight: 50,
        });
        char.save().then(() => done());
    });

    it("Should update a record", (done) => {
        MarioChar.findOneAndUpdate(
            { name: "Mario" },
            { $set: { name: "Luigi" } },
            { useFindAndModify: false }
        ).then((result) => {
            MarioChar.findOne({ _id: char._id }).then((result) => {
                if (result.name === "Luigi") {
                    done();
                }
            });
        });
    });

    it("Should increment all weights by 1", (done) => {
        MarioChar.updateMany({}, { $inc: { weight: 1 } })
            .then(() => {
                MarioChar.findOne({ name: "Mario" }).then((result) => {
                    assert(result.weight === 51);
                    done();
                });
            })
            .catch((error) => done(error.message));
    });
});
