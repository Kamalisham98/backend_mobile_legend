
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Product extends Model {
    /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
    static associate(models) {
      // define association here
    }
  }

  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    game_type: DataTypes.STRING,
    product_type: DataTypes.STRING,
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Product' // We need to choose the model name
  })

  return Product
}

// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Product extends Model {
//     id
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Product.init({
//     name: DataTypes.STRING,
//     price: DataTypes.INTEGER,
//     game_type: DataTypes.STRING,
//     product_type: DataTypes.STRING,
//   }, {
//     sequelize,
//     modelName: 'Product',
//   });
//   return Product;
// };
