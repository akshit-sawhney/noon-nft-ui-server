'use strict';

// eslint-disable-next-line import/no-unresolved
const express = require('express');
const bodyParser = require('body-parser');
const userController = require('../controllers/users');

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false
}));

router.get('/user_details/:userId', userController.getUserDetails)


module.exports = router;