const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: Number

    },
    whishList: {
        type: String
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);

module.exports = User