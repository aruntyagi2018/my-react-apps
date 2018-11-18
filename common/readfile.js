var fs = require('fs');
var loginfile = './data/userslogin.data';
var files = {
  readFile: function (callback) {
    console.log('read file');
     fs.readFile(loginfile, (err, data) => {  
      if (err)
      {
        console.log('file read error');
        callback(err,undefined);
      } 
      console.log('users data ' + data + ' kk ');
      console.log(' json data ' + JSON.parse(data));
      callback(undefined,JSON.parse(data));
     });
  },
  checkusername : function(username,callback)
  {
    console.log(username);
    files.readFile(function(err,data)
    {
      let userexists = false;
      if(err)
        callback(err,undefined);
      console.log(data.users);
       var result =  data.users.filter(function(user,username){
            return user.username.toLowerCase().indexOf(username) !== -1;
            });
      console.log('user.username 111');
      console.log(result.length);
      console.log(result.length);
      callback(undefined,userexists);
     
    });
  },
  writeFile: function (userdata,filepath) {
    let filedata = files.readFile(filepath); //files.readFile('./data/login.data');
    filedata.users.push(userdata);
    fs.writeFileSync(filepath, JSON.stringify(filedata));  
  }
};
module.exports = files;