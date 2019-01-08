module.exports = {
    validatePosts(req, res, next) {
        if(req.method === 'POST') {
            req.checkBody('message', 'must not be empty').notEmpty();
        }

        const errors = req.validationErrors();

        if(errors) {
            return res.redirect(303, req.headers.referer);
        } else {
            return next();
        }
    }
}