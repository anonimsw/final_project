const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
        },
        username: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        phone_number: {
            type: Number,
        }
    },

);

module.exports = mongoose.model("Todo", todoSchema);