const express = require('express');
const router = express.Router();
const {register, login, hello} = require('../controllers/auth');

router.route('/register').get(hello).post(register);
router.route('/login').post(login);


module.exports = router;