const express = require("express");
const knex = require('../db/client');

const router = express.Router();

//------------------POST ROUTES------------------------------------------------->

//Index of Posts:
//the below path automatically assumes that it has the '/posts' prefixed to it
router.get('/', (req, res) => {  //-> /posts/
   knex('posts')
   .orderBy('created_at', 'desc')
   .then(posts => {
       res.render('posts/index', {posts: posts})
   }); 
});

//New
router.get('/new', (req, res) => {
    res.render('posts/new', { post: false });
})

//Show a single post
router.get('/:id', (req, res) => {
    knex('posts')
    .where('id', req.params.id)
    .first()
    .then(post => {
        if(!post) {
            res.send('No post found')
        } else {
            res.render('posts/show', { post:post} )
        }
    });
})

//Create
router.post('/', (req, res) => {
    knex('posts')
    .insert({
        title: req.body.title,
        image_url: req.body.image_url,
        content: req.body.content
    })
    .returning('*')
    .then(posts => {
        //knex usually returns an array of objects
        //so we use posts[0] to make sure we grab the object we want
        const post = posts[0];
        res.redirect(`/posts/${post.id}`)
    })
})

//Edit
router.get('/:id/edit', (req, res) => {
    knex('posts')
    .where('id', req.params.id)
    .first()
    .then(post => {
        res.render('posts/edit', { post: post} )
    })
})

//Update
router.patch('/:id', (req, res) => {
    knex('posts')
    .where('id', req.params.id)
    .update({
        title: req.body.title,
        image_url: req.body.image_url,
        content: req.body.content
    })
    .then(() => {
        res.redirect(`/posts/${req.params.id}`)
    })
})

//Destroy/Delete
router.delete('/:id', (req,res) => {
    knex('posts')
    .where('id', req.params.id)
    .del()
    .then(() => {
        res.redirect('/posts')
    })
})

//-------------------------------------------------------------------------------->
module.exports = router;
