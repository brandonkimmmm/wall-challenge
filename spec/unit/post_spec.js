const sequelize = require('../../src/db/models/index').sequelize;
const User = require('../../src/db/models').User;
const Post = require('../../src/db/models').Post;

describe('Post', () => {
    this.user;
    beforeEach((done) => {
        sequelize.sync({force: true})
        .then(() => {
            // User.create({
            //     email: 'user@email.com',
            //     password: 'password'
            // })
            // .then((user) => {
            //     this.user = user;
            //     done();
            // })
            // .catch((err) => {
            //     console.log(err);
            // })
            done();
        })
        .catch((err) => {
            console.log(err);
            done();
        });
    });

    describe('#create()', () => {
        it('should create a Post object with a message and associated user', (done) => {
            Post.create({
                message: 'hello this is fun',
            })
            .then((post) => {
                expect(post.message).toBe('hello this is fun');
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            });
        });

        it('should not create a post without an associated user', (done) => {
            Post.create({
                message: 'hello this is fun',
            })
            .then((post) => {
                done();
            })
            .catch((err) => {
                expect(err.message).toContain('Violation');
                done();
            });
        });

        // it('should not create a user with an email already taken', (done) => {

        // })
    });
});