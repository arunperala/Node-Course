const cp = require('child_process')

// cp.execSync('calc')
// cp.execSync('start chrome')
console.log("output:" + cp.execSync('node start.js'))
