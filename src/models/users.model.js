// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const options = {
    discriminatorKey: '_type',
    timestamps: true
  }

  const users = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true}
  }, options);

  return mongooseClient.model('users', users);
};
