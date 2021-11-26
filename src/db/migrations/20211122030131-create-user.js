module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {

      id: {

        allowNull: false,

        autoIncrement: true,

        primaryKey: true,

        type: Sequelize.INTEGER

      },

      email: {

        type: Sequelize.STRING

      },

      passwordHash: {

        type: Sequelize.STRING

      },

      name: {

        type: Sequelize.STRING

      },

      firstName: {

        type: Sequelize.STRING

      },

      lastName: {

        type: Sequelize.STRING

      },

      dateOfBirth: {

        type: Sequelize.STRING

      },

      introduction: {

        type: Sequelize.STRING

      },

      avatar: {

        type: Sequelize.STRING

      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users')
  }

}
