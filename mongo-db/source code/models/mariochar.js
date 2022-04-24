const mongoose = require("mongoose");

// Create Schema and Model

const MarioCharSchema = new mongoose.Schema({
    name: String,
    weight: Number,
});

const MarioChar = mongoose.model("mariochar", MarioCharSchema);

module.exports = MarioChar;
