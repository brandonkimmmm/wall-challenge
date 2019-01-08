const Post = require('./models').Post;

module.exports = {
    getAll(callback) {
        return Post.all()
        .then((posts) => {
            callback(null, posts);
        })
        .catch((err) => {
            callback(err);
        })
    },

    create(newPost, callback) {
        return Post.create({
            message: newPost.message,
        })
        .then((post) => {
            callback(null, post);
        })
        .catch((err) => {
            callback(err);
        })
    }
}