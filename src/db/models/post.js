const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.User = this.belongsTo(models.User)
      Post.Thread = this.belongsTo(models.Thread)
      Post.Favourites = this.hasMany(models.Favourite)
      Post.FavourtedUsers = this.belongsToMany(models.User, { through: 'Favourite' })
    }
  }

  Post.init({
    content: DataTypes.TEXT,
    ThreadId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    liked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Post'
  })

  return Post
}
