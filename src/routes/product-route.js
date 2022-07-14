'use strict'

const express = require('express');
const controller = require('../controllers/product-controller')
const router = express.Router();

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/id/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;