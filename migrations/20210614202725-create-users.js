'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      roleID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'roles',
          key: 'id'
        }   
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {freezeTableName:true});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};