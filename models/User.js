var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true
  }
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
