// fs module with files

const fs = require('fs')

// reading a file
let filecontent = fs.readFileSync('f1.txt')

console.log('data of file 1 -> ' + filecontent)

// writing a file

fs.writeFileSync('f1.txt', 'This is file 2')
console.log('File has been written')

//append a file
fs.appendFileSync('f2.txt', ' this is uptadted data')
console.log("file is appended")

// deleting a file

fs.unlinkSync('f2.txt')
console.log('file has been deleted')