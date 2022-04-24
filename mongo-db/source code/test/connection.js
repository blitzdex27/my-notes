const mongoose = require("mongoose");

// ES6 Promise
mongoose.Promise = global.Promise;

// Connect to the db before test run
before(function (done) {
    mongoose.connect("mongodb://localhost/testaroo", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection
        .once("open", function () {
            console.log("Connection has been made, now make fireworks...");
            done();
        })
        .on("error", function (error) {
            console.log('Connection error"', error);
        });
});

// Drop collections before each tests
beforeEach(function (done) {
    mongoose.connection.collections.mariochars.drop(function () {
        done();
    });
});
