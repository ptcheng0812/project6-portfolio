'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.User = this.belongsTo(models.User)
      Task.Date = this.belongsTo(models.Date)
    }
  };
  Task.init({
    duty: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    DateId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
