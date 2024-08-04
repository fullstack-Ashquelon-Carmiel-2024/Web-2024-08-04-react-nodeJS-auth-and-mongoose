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
            required: false },
    refreshToken: { type: String } // could be array if we want to enable
                                  // concurrent login from different devices
})

const User = mongoose.model('User', userSchema)
module.exports = User