const express = require('express');
const router = express.Router();
const userModel = require('../models/user');

router.get('/users', async (req, res) => {
    const users = await userModel.find({});
    try{
        res.send(users);
    }catch(err){res.status(500).send(err)}
});

router.post('/user', async (req, res) => {
    const user = new userModel(req.body);
    try{
        await user.save();
        res.send(user);
    }catch(err){res.status(500).send(err)}
});

router.patch('/user/:id', async (req, res) => {
    try{
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.send(updatedUser);
    }catch(err){res.status(500).send(err)}
});

router.delete('/user/:id', async(req, res) => {
    try{
        const user = await userModel.findByIdAndDelete(req.params.id);
        if(!user) res.status(404).send("Not found!");
        res.status(200).send();
    }catch(err){res.status(500).send(err)}
})

module.exports = router;