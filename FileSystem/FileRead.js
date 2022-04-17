// fs.read(fd, buffer, offset, length, position, callback);
// fs.readSync -> same but without callback
const fs = require("fs");
const dirfile = "dir.txt";
const flagsfile = "flags.txt";

let fileSize = fs.statSync(flagsfile).size;
let buf = new Buffer.alloc(fileSize);

fs.open(flagsfile, "r+", (err, fd) => {
  if (err) {
    throw err;
  } else {
    console.log(`file ${fd} successfully opened`);

    let bytes = fs.readSync(fd, buf, 0, fileSize, 0);
    console.log("bytes read: ", bytes);
    console.log("buffer data", buf.toString());

    fs.close(fd, (err) => {
      if (err) {
        console.log("something has happend");
      }
    });
  }
});
