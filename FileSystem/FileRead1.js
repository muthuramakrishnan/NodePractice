// fs.readFile(path, {encoding, flag}, callback)
//you don't want to open / close.  those things will automatically be done
const fs = require('fs');
const flagsfile = 'flags.txt';

//options can be a string or it can be an object
// let data = fs.readFileSync(flagsfile, 'utf-8');
let data = fs.readFileSync(flagsfile, {encoding: 'utf-8'});
console.log("data", data);