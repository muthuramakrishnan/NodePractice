// fs.write(fd, string[,position[,encoding], callback])

const fs = require("fs");
const str = "This is the string i want to write\n";
const fileName = "myPath.txt";

fs.open(fileName, "a", (err, fd) => {
  if (err) {
    console.log("err", err);
  } else {
    let bytes = fs.writeSync(fd, str);
    console.log(bytes, " written");
  }
});
