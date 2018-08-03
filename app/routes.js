var express = require("express");
var path = require('path');



var router = express.Router();

// Export router to use in server.js
module.exports = router;

// GET homepage
router.get('/', function(req, res) {
    res.render('pages/index');
});

// GET about
router.get('/about', function(req, res) {
    res.render('pages/about');
});

router.get('/contact', function(req, res) {
    res.render('pages/contact');
});

router.post('/contact', function(req, res) {

});

router.get('/login', function(req, res) {
    res.render('pages/login');
});

router.post('/login', function(req, res) {

});

router.get('/register', function(req, res) {
    res.render('pages/register', {
            diff: false 
        });
    console.log("GET");
});

router.post('/register', function(req, res) {
    console.log("POST");
    console.log(req.body);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.confirmPassword);
    var pass = req.body.password
    var passConfirm = req.body.confirmPassword
    if (pass == passConfirm) {
        res.render('pages/index');
    }
    else {
        res.render('pages/register', {
            diff: true 
        });
    }
});