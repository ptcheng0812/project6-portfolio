const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Favourite', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PostId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Favourites',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Favourites_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
