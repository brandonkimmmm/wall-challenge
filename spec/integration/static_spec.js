const request = require('request');
const server = require('../../src/server');
const base = 'http://localhost:3000';
const sequelize = require('../../src/db/models/index').sequelize;
// const User = require('../../src/db/models').User;
const Post = require('../../src/db/models').Post;

describe('routes : static', () => {
    beforeEach((done) => {
        sequelize.sync({force: true}).
        then((res) => {
            done();
        });
    });

    describe('GET /', () => {
        it('should return status code 200', (done) => {
            request.get(base, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });

        it('should show all posts', (done) => {
            request.get(base, (err, res, body) => {
                expect(body).toContain('Posts');
                expect(body).toContain('The Wall');
                done();
            })
        })

        it('should show a message form', (done) => {
            request.get(base, (err, res, body) => {
                expect(body).toContain('Comment');
                done();
            })
        })
    });

    describe('POST /', () => {
        it('should create a new post with the message', (done) => {
            const options = {
                url: base,
                form: {
                    message: 'Hey, Jude',
                }
            };
            request.post(options, (err, res, body) => {
                Post.findOne({where: {message: 'Hey, Jude'}})
                .then((post) => {
                    expect(post.message).toBe('Hey, Jude');
                    done();
                })
                .catch((err) => {
                    console.log(err);
                    done();
                })
            })
        });

        it('should not create a new post with an empty message', (done) => {
            const options = {
                url: base,
                form: {
                    message: ''
                }
            }
            request.post(options, (err, res, body) => {
                Post.findOne({where: {message: ''}})
                .then((post) => {
                    expect(post).toBeNull();
                    done();
                })
                .catch((err) => {
                    console.log(err);
                    done();
                })
            })
        })
    })
});