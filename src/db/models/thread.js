const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Thread extends Model {
    static associate(models) {
      Thread.User = this.belongsTo(models.User)
      Thread.Posts = this.hasMany(models.Post)
    }
  }

  Thread.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Thread'
  })

  return Thread
}
