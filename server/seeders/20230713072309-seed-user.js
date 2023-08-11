'use strict';
const {hashPassword} = require('../helpers/helper')
let data = require('../data/user.json')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    data.map((el) => {
      el.createdAt = el.updatedAt = new Date(),
      el.password = hashPassword(el.password)
      return el
    })
    await queryInterface.bulkInsert('Users', data)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
