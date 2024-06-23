const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true,unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true }, 
  tasks:[{
      content:String
  }]
});

module.exports = mongoose.model('User', userSchema);