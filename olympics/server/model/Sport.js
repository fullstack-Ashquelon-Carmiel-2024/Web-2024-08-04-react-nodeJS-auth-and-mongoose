const mongoose = require('mongoose');

sportSchema = new mongoose.Schema({
    name: { type: String, required: true },
    isOlympic: { type: Boolean, required: true},
    isSummerOlympic: { type: Boolean, required: true},
    img: { type: String },
    sailingClass: {type: String, required: false}
})

const Sport = mongoose.model('Sport', sportSchema)
module.exports = Sport