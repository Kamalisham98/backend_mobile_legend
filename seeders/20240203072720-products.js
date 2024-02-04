'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
        {
          name: "Twilight Pass",
          price: 145190,
          game_type: 'mobile_legend',
          product_type: 'special',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Weekly special Pass",
          price: 28071,
          game_type: 'mobile_legend',
          product_type: 'special',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "2x Weekly special Pass",
          price: 56141,
          game_type: 'mobile_legend',
          product_type: 'special',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "3x Weekly special Pass",
          price: 84212,
          game_type: 'mobile_legend',
          product_type: 'special',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "4x Weekly special Pass",
          price: 112283,
          game_type: 'mobile_legend',
          product_type: 'special',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "5x Weekly special Pass",
          price: 140354,
          game_type: 'mobile_legend',
          product_type: 'special',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Product', null, {});
  }
};
