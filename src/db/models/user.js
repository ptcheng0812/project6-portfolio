const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.AuthenticityTokens = this.hasMany(models.AuthenticityToken)
      User.Threads = this.hasMany(models.Thread)
      User.Posts = this.hasMany(models.Post)
      User.Favourites = this.hasMany(models.Favourite)
      User.FavouritedPosts = this.belongsToMany(models.Post, { through: 'Favourite' })
      User.Notifications = this.hasMany(models.Notification)
    }
  }
  User.init({
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    name: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    introduction: DataTypes.TEXT,
    avatar: DataTypes.STRING
  }, {
    timestamps: false,
    sequelize,
    modelName: 'User'
  })
  return User
}
