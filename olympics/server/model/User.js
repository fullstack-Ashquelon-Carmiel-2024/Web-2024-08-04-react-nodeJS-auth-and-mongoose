const mongoose = require('mongoose');
const Role = require('./Role')

userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', 
            required: true },
    sport: { type: mongoose.Schema.Types.ObjectId, ref: 'Sport', 
            required: false }
})

const User = mongoose.model('User', userSchema)
module.exports = User