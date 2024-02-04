'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        name: "5 (5+0)",
        price: 1452,
        game_type: 'mobile_legend',
        product_type: 'diamond',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "10 (9+1)",
        price: 2904,
        game_type: 'mobile_legend',
        product_type: 'diamond',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "12 (11+1)",
        price: 3388,
        game_type: 'mobile_legend',
        product_type: 'diamond',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "14 (13+1)",
        price: 3872,
        game_type: 'mobile_legend',
        product_type: 'diamond',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "15 (15+0)",
        price: 4356,
        game_type: 'mobile_legend',
        product_type: 'diamond',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "18 (17+1)",
        price: 4841,
        game_type: 'mobile_legend',
        product_type: 'diamond',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "19 (17+2)",
        price: 5325,
        game_type: 'mobile_legend',
        product_type: 'diamond',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "28 (26+2)",
        price: 7744,
        game_type: 'mobile_legend',
        product_type: 'diamond',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "36 (33+3)",
        price: 9546,
        game_type: 'mobile_legend',
        product_type: 'diamond',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "44 (40+4)",
        price: 11616,
        game_type: 'mobile_legend',
        product_type: 'diamond',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "46 (42+4)",
        price: 12584,
        game_type: 'mobile_legend',
        product_type: 'diamond',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "59 (53+6)",
        price: 15488,
        game_type: 'mobile_legend',
        product_type: 'diamond',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "71 (64+7)",
        price: 18846,
        game_type: 'mobile_legend',
        product_type: 'diamond',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "88 (80+8)",
        price: 23231,
      game_type: 'mobile_legend',
      product_type: 'diamond',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: "113 (102+11)",
        price: 30007,
      game_type: 'mobile_legend',
      product_type: 'diamond',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: "170 (154+16)",
        price: 44525,
      game_type: 'mobile_legend',
      product_type: 'diamond',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: "222 (200+22)",
        price: 57989,
      game_type: 'mobile_legend',
      product_type: 'diamond',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: "257 (234+23)",
        price: 68960,
      game_type: 'mobile_legend',
      product_type: 'diamond',
      createdAt: new Date(),
      updatedAt: new Date()
      },
    ]

    return queryInterface.bulkInsert('Products', data)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Product', null, {});
  }
};
