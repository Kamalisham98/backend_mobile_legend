'use strict';
const path = require("path")
const {Product} = require('../models')
const controller = {};

controller.getAll = async function (req, res) {
  try {
      const data = await Product.findAll({
        // attributes: ['id', 'name', 'price']
      });

      if (data.length > 0) {
           res
              .status(200)
              .json({ message: "Connection successful", data: data });
      } else {
          res.status(200).json({ message: "Connection failed", data: [] });
      }
  } catch (error) {
    console.log(error)
      res.status(404).json({ message: error });
  }
};


module.exports = controller
