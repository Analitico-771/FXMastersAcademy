'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('roles', [
      {
        title: 'Beginner User',
        createdAt: new Date(),
        updatedAt: new Date() 

      },
      {
        title: 'Intermediate Users', 
        createdAt: new Date(),
        updatedAt: new Date() 

      },
      {
        title: 'Staff', 
        createdAt: new Date(),
        updatedAt: new Date() 

      },
      {
        title: 'Admin Staff', 
        createdAt: new Date(),
        updatedAt: new Date() 

      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
