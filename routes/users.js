//'use strict';
var express = require('express');
var router = express.Router();
var uscore = require("underscore");
var files =  require('../common/readfile.js');

router.get('/list',(req,res) => {
    console.log('read async file');
    files.readFile(function(err,data){
    if(err)
        res.json({status:'ERROR',message:err});

        res.json(data);
    });
});
router.get('/checkuser/:userid',(req,res) => {
    console.log('read async file');
    console.log(req.params.userid);
    files.checkusername(req.params.userid,function(err,data){
    if(err)
        res.json({status:'ERROR',message:err});
        if(data)
            res.json({status:'ALREADY EXISTS',message:'username is already taken'});
        else
            res.json({status:'AVAILABLE',message:'username is available'});
    });
    console.log('end method');
});
router.get('/register', function(req, res, next) {
    console.log('register route');
 res.render('register');
});

router.post('/save',(req,res) => {
    files.writeFile(req.body,'./data/login.data');
    res.redirect('/api/users/list');

});
 router.get('/login', function(req, res, next) {
 res.render('login');
});
router.post('/validatelogin', function(req, res, next) {
     files.readFile(function(err,logindata){
        var userdetails = uscore.where(logindata.users, {username: req.body.username,password:req.body.pwd});
        let loginstatus = userdetails.length ? true:false;
        let logininfo = {};
        logininfo.status = loginstatus;
        logininfo.userprofile = loginstatus ? userdetails[0] : [];
        let usermessage='{loginstatus:' + loginstatus + ',userprofile: ' + userdetails[0] +  '}' ;
        res.send(logininfo); 
    }); 
});
router.get('/logout',function(req,res,next){
    console.log('logout method');
    req.session.destroy();
    res.redirect('/');
});


module.exports = router;