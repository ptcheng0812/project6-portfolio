const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    static associate(models) {
      Favourite.User = this.belongsTo(models.User)
      Favourite.Post = this.belongsTo(models.Post)
    }
  }

  Favourite.init({
    UserId: DataTypes.INTEGER,
    PostId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favourite'
  })

  return Favourite
}
