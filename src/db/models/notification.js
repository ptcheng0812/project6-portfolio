const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    static associate(models) {
      Notification.User = this.belongsTo(models.User)
    }
  }

  Notification.init({
    message: DataTypes.STRING,
    ReceivedUserId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Notification'
  })

  return Notification
}
