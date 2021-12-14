const express = require('express');

const router = express.Router();


const User = require('../models/user.model');

const crudController = require('./curd.controller');

router.post('', crudController.post(User));
router.get('', crudController.get(User));
router.get('/:id', crudController.getOne(User));
router.patch('/:id', crudController.updateOne(User));
router.delete('/:id', crudController.deleteOne(User));


module.exports = router;