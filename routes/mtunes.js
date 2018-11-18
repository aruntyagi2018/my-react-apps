var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:searchtxt',function(req,res){
    //console.log('route called : ' + req.params.searchtxt);
    request.get('https://itunes.apple.com/search?term=' + req.params.searchtxt,function(err,response,body){
       res.send(body);
       //res.json({searchData:{mdata:'mtunes my data',count:12}});
   // res.json({searchData : JSON.parse(body)});
    //res.send('mydata');
    });
});
router.get('/favourites',function(req,res,next){
    console.log('mtunes data');
    files.readFile('./data/mtunes.data',function(err,data){
      console.log(data);
      res.render('mtunes-favourites',{layout:'masterLayout',favitems : data});
    });
  //res.json(req.session.mtunesdata);
    //res.render('mtunes-favourites',{layout : 'masterLayout'});
  });
  router.get('/addfav/:itemId',function(req,res,next){
    const strTrackId = req.params.itemId;
  console.log(strTrackId);
  const mtunesdata = req.session.mtunesdata;
  console.log(mtunesdata);
  console.log(strTrackId);
  var trackdata = uscore.where(mtunesdata,{trackId:strTrackId});
  console.log(trackdata);
  
  
  });

module.exports = router;