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
        }
    },

);

module.exports = mongoose.model("Todo", todoSchema);