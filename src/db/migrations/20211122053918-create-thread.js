module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Threads', {

      id: {

        autoIncrement: true,

        primaryKey: true,

        type: Sequelize.INTEGER

      },

      title: {

        type: Sequelize.STRING

      },

      category: {

        type: Sequelize.STRING

      },

      UserId: {

        type: Sequelize.INTEGER

      },

      createdAt: {

        allowNull: false,

        type: Sequelize.DATE

      },

      updatedAt: {

        allowNull: false,

        type: Sequelize.DATE

      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Threads')
  }

}
