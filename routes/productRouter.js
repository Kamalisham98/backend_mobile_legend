const express = require("express")
const router = express.Router()
const controller = require("../controllers/indexController")

router.get("/", controller.product.getAll)
router.get("/:product_id", controller.product.getOne)

module.exports = router
