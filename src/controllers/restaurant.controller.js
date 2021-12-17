const express = require('express');

const router = express.Router();


const Restaurant = require('../models/restaurant.model');

const crudController = require('./curd.controller');

router.post('', crudController.post(Restaurant));
router.get('', crudController.get(Restaurant));
router.get('/:id', crudController.getOne(Restaurant));
router.patch('/:id', crudController.updateOne(Restaurant));
router.delete('/:id', crudController.deleteOne(Restaurant));


module.exports = router;