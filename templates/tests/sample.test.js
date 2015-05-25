var request = require('supertest'),
    express = require('express'),
    chai = require('chai'),
    should = chai.should();

var app = express();

app.get('/user', function(req, res) {
    res.send({
        name: 'user'
    });
});

describe('Sample test suite', function() {
    it('respond with json', function(done) {
        request(app)
            .get('/user')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
