'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username : 'John',
      email : 'johndoe@example.com',
      password : 'Password123',
      latitude: '34.45',
      longitude: '45.66',
      address: '123 Johnson St.'
      createdAt : new Date(),
      updatedAt : new Date()
    }],
    [{
      username : 'Jim',
      email : 'jimmyjoe@example.com',
      password : 'Password321',
      latitude: '94.44',
      longitude: '85.33',
      address: '321 Summer St.'
      createdAt : new Date(),
      updatedAt : new Date()
    }],
    {});
},


  down: function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Users', [{
      first_name :'John'
    }])
  }
};
