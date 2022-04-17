//fs.stat(path, callback)
//fs.statSync(path)

const fs = require("fs");

const dirfile = "dir.txt";
const flagsfile = "flags.txt";

let stats = fs.statSync(flagsfile);
// console.log(stats);
console.log(stats.isDirectory(), stats.isFile());


fs.stat(flagsfile, (err, stats) => {
    //fd is file description
    if(err){
        console.log("err", err);
    }
    else{
        console.log('stats', stats);
    }
})

//mode is the what kind of permission set 33188 -> is regular file with read and write
//atime -> last time file accessed
//mtime -> modified time
//ctime -> things might of change -> not in the content but something like permission
//birthtime -> file creation time

//this is the info you get in stats
// Stats {
//     dev: 16777231,
//     mode: 33188,
//     nlink: 1,
//     uid: 501,
//     gid: 20,
//     rdev: 0,
//     blksize: 4096,
//     ino: 5898914,
//     size: 511,
//     blocks: 8,
//     atimeMs: 1650198193666.962,
//     mtimeMs: 1650196859510.313,
//     ctimeMs: 1650196859510.313,
//     birthtimeMs: 1650196859472.8743,
//     atime: 2022-04-17T12:23:13.667Z,
//     mtime: 2022-04-17T12:00:59.510Z,
//     ctime: 2022-04-17T12:00:59.510Z,
//     birthtime: 2022-04-17T12:00:59.473Z
//   }
