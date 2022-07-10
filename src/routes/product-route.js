'use strict'

const express = require('express');
const controller = require('../controllers/product-controller')
const router = express.Router();

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;