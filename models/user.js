const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    tags: String,
    selfTalkMessages: String
        // role: {
        // 	type: String,
        // 	enum : ['EDITOR', 'ADMIN'],
        // 	default : 'ADMIN'
        // }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);

module.exports = User;