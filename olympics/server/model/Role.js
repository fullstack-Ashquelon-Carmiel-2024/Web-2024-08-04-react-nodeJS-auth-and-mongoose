const mongoose = require("mongoose");

const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    userType: {
        type: String,
        enum: ['user', 'moderator', 'admin']
    }
  })
);

module.exports = Role;