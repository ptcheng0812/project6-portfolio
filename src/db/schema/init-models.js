var DataTypes = require("sequelize").DataTypes;
var _AuthenticityToken = require("./authenticity_token");
var _Favourite = require("./favourite");
var _Notification = require("./notification");
var _Post = require("./post");
var _SequelizeMetum = require("./sequelize_metum");
var _Thread = require("./thread");
var _User = require("./user");

function initModels(sequelize) {
  var AuthenticityToken = _AuthenticityToken(sequelize, DataTypes);
  var Favourite = _Favourite(sequelize, DataTypes);
  var Notification = _Notification(sequelize, DataTypes);
  var Post = _Post(sequelize, DataTypes);
  var SequelizeMetum = _SequelizeMetum(sequelize, DataTypes);
  var Thread = _Thread(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);


  return {
    AuthenticityToken,
    Favourite,
    Notification,
    Post,
    SequelizeMetum,
    Thread,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
