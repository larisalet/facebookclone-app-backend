const express = require('express');
const router = express.Router();
const postModel = require('../models/post');

router.get('/posts', async (req, res) => {
    const posts = await postModel.find({});
    try{
        res.send(posts);
    }catch(err){res.status(500).send(err)}
});

router.post('/post', async (req, res) => {
    const post = new postModel(req.body);
    try{
        await post.save();
        res.send(post);
    }catch(err){res.status(500).send(err)}
});

router.patch('/post/:id', async (req, res) => {
    try{
        const updatedPost = await postModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.send(updatedPost);
    }catch(err){res.status(500).send(err)}
});

router.delete('/post/:id', async(req, res) => {
    try{
        const post = await postModel.findByIdAndDelete(req.params.id);
        if(!post) res.status(404).send("Not found!");
        res.status(200).send();
    }catch(err){res.status(500).send(err)}
})

module.exports = router;