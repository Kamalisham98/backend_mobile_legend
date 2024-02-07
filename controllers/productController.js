'use strict';
const path = require("path")
const {Product} = require('../models')
const { query } = require('express')
const controller = {};

controller.getAll = async function (req, res) {
  try {

    let query = {}
    if (req.query?.game_type != null && req.query?.product_type != null) {
      query = {
        where: {
          game_type: req.query.game_type,
          product_type: req.query.product_type
        }
      }
    }
console.log(query)
      const data = await Product.findAll(query);

      if (data.length > 0) {
           res.status(200)
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
