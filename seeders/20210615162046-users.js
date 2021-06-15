'use strict';
// Role Id
// 1 = beginer student 
// 2 = intermediate student
// 3 = staff
// 4 = admin staff
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('users', [
        {
          fName: 'John',
          lName: 'Doe',
          email: 'john@gmail.com',
          username: 'JohnD',
          password: '12345', 
          roleID: 1,
          createdAt: new Date(),
          updatedAt: new Date() 
  
        },
        {
          fName: 'Michael',
          lName: 'Jordan',
          email: 'mj23@gmail.com',
          username: 'mj23',
          password: '54321', 
          roleID: 1,
          createdAt: new Date(),
          updatedAt: new Date() 
  
        },
        {
          fName: '',
          lName: '',
          email: '',
          username: '',
          password: '', 
          roleID: 36,
          createdAt: new Date(),
          updatedAt: new Date() 
  
        },
        {
          fName: 'Promises',
          lName: '',
          email: '',
          username: '',
          password: '', 
          roleID: 36,
          createdAt: new Date(),
          updatedAt: new Date() 
  
        },
        {
          fName: 'Promises',
          lName: '',
          email: '',
          username: '',
          password: '', 
          roleID: 36,
          createdAt: new Date(),
          updatedAt: new Date() 
  
        },
        {
          fName: 'Promises',
          lName: '',
          email: '',
          username: '',
          password: '', 
          roleID: 36,
          createdAt: new Date(),
          updatedAt: new Date() 
  
        },
        {
          fName: 'Promises',
          lName: '',
          email: '',
          username: '',
          password: '', 
          roleID: 36,
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
