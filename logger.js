const os = require('os');
const path = require('path');

let filename = path.parse(__filename);
var totalMem = os.totalmem();
const freeMem = os.freemem();

console.log(totalMem);
console.log(freeMem);
console.log(filename);