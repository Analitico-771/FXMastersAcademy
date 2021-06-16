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
          fName: "John",
          lName: "Doe",
          email: "john@gmail.com",
          username: "JohnD",
          password: "doe12345", 
          roleID: 1,
          createdAt: new Date(),
          updatedAt: new Date() 
  
        },
        {
          fName: "Michael",
          lName: "Jordan",
          email: "mj23@gmail.com",
          username: "mj23",
          password: "bulls54321", 
          roleID: 1,
          createdAt: new Date(),
          updatedAt: new Date() 
  
        },
        {
          fName: "Elon",
          lName: "Musk",
          email: "tesla@gmail.com",
          username: "emusk",
          password: "doge1234", 
          roleID: 1,
          createdAt: new Date(),
          updatedAt: new Date() 
  
        },
        {
          fName: "Michael",
          lName: "Williams",
          email: "mike@gmail.com",
          username: "mikewill",
          password: "will246", 
          roleID: 3,
          createdAt: new Date(),
          updatedAt: new Date() 
  
        },
        {
          fName: "Floyd",
          lName: "Mayweather",
          email: "moneymay@gmail.com",
          username: "moneymay",
          password: "money135", 
          roleID: 1,
          createdAt: new Date(),
          updatedAt: new Date() 
  
        },
        {
          fName: "Brandon",
          lName: "Stinson",
          email: "brand@gmail.com",
          username: "bstinson",
          password: "dc9876", 
          roleID: 3,
          createdAt: new Date(),
          updatedAt: new Date() 
  
        },
        {
          fName: "Syreeta",
          lName: "Greene",
          email: "greene@gamil.com",
          username: "rio",
          password: "abcd1234", 
          roleID: 3,
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



