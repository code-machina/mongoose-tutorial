const mongoose = require('mongoose');
const { User, userSchema } = require('./model');

mongoose.connect('mongodb://localhost/tuts', { useNewUrlParser: true });


const user = new User({
  name: 'gbkim'
}).save(function (res, cb) {
  console.log(res, cb)
});


// User.deleteAll();

// console.log(user);