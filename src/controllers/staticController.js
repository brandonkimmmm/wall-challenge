const postQueries = require('../db/queries.posts.js');

module.exports = {
    index(req, res, next) {
        postQueries.getAll((err, posts) => {
            if(err || posts === null) {
                res.render('static/index');
            } else {
                res.render('static/index', {posts});
            }
        });
    },

    addPost(req, res, next) {
        let newPost = {
            message: req.body.message,
        }
        postQueries.create(newPost, (err, post) => {
            if(err){
                res.redirect(500, '/');
            } else {
                res.redirect(303, '/');
            }
        })
    }
}