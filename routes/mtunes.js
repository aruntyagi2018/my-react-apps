var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:searchtxt',function(req,res){
    console.log('route called : ' + req.params.searchtxt);
    request.get('https://itunes.apple.com/search?term=' + req.params.searchtxt,function(err,response,body){
       res.send(body);
       //res.json({searchData:{mdata:'mtunes my data',count:12}});
   // res.json({searchData : JSON.parse(body)});
    //res.send('mydata');
    });
});

module.exports = router;