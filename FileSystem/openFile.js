//There are 2 functions available for this
//open ===> fs.open(path, flag, [mode], callback)
//openSync ===> fs.openSync(path, flag, [mode]) ==> sync
//mode is the set of permissions that can be given when a file is created -> rw permissions

//there are 12 different flags.  It is used to indicate what operation you are going to do with this file
//example read, write, append, both read & writte, append, both read and append etc
const dirfile = "dir.txt";
const flagsfile = "flags.txt";

const fs = require("fs");
fs.open(flagsfile, "r+", (err, fd) => {
  //fd is a variable that will represent the file within my program
  if (err) {
    console.log("err", err);
  } else {
    //read
    //write
    console.log("opened the file successfully");
    fs.close(fd, (err) => {
      console.log("err", err);
    });
  }
});
