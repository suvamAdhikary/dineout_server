const express = require('express');

const router = express.Router();


const User = require('../models/user.model');

const crudController = require('./curd.controller');

router.post('', crudController.post(User));
router.get('', crudController.get(User));
router.get('/:id', crudController.getOne(User));
router.patch('/:id', crudController.updateOne(User));
router.delete('/:id', crudController.deleteOne(User));

router.get('/mobile/:mobile', async () => {

    try {
        
        const user = await User.findOne({mobile : req.params.mobile}).lean().exec();

        return res.send(user);

    } catch (err) {

        res.send(err);
    }
})

module.exports = router;