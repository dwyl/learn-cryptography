var bcrypt = require('bcrypt');
var pass = {};
var limit = 14
var j = 0;
for(var i = 1; i < limit; i++){
  var st = new Date().getTime();
  bcrypt.genSalt(i, function(err, salt) {

    bcrypt.hash('B4c0/\/', salt, function(err, hash) {
      // Store hash in your password DB.
      console.log(hash);
      var et = new Date().getTime();
      var took = et - st;
      pass[j++] = took + 'ms';
      console.log("Time to hash: "+took +"ms | " + j);

      if(j === limit-1) {
        console.log(" - - - - - RESULTS - - - - - ");
        console.dir(pass);
      }
    });
  });

}
