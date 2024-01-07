const express = require('express');
const router = express.Router();
const Users = require('../controllers/users');
/* GET users listing. */
router.get('/', Users.getAll);


module.exports = router;
