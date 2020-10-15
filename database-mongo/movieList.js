const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    moviename: {
        type: String,
        required: true
    },
    imageurl: {
        type: String
    },
    description: {
        type: String
    },
    releasedate: {
        type: Number
    },
}, {
    timestamps: true
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie