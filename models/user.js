const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;


// Utilize reasonable data modeling practices (page 1, 10%)

class User {
  constructor(id, username, email) {
    this.id = id;
    this.username = username;
    this.email = email;
  }
}

module.exports = User;
