var Model = require('./Model');
var User = require('./User');

var AccountSchema = {
  user: User,
  accountnumber: Number,
};

function User(){
  Model.call(this, UserSchema);
}

Model.extend(User);

module.exports = User;