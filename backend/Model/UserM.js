const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    Userid: {
        type: Number,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    }
})

const collection = mongoose.model("User", UserSchema);
module.exports = collection; 