// fs module with directories

const fs = require("fs")

// creating a directory

fs.mkdirSync("myDirectory")

// check the content in directory

let folderPath = "C:\\Users\\srich\\OneDrive\\Desktop\\Node Course\\myDirectory"

let folderContent = fs.readdirSync(folderPath)

console.log("folder content: " , folderContent)

// check dir exists or not
// works with files to

let doesExists =  fs.existsSync("myDirectory")
let doesfileExists = fs.existsSync("cp.js")

console.log(doesExists)
console.log(doesfileExists)

// removing a dir, before removing a dir, the dir should be empty or it will throws an error

fs.rmdirSync('myDirectory')
console.log("dir has been deleted")