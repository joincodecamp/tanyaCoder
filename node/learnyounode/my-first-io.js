// const fs = require('fs');
// const buf = fs.readFileSync(process.argv[2]);
//
// const str = buf.toString();
// const strArray = str.split('\n');
// console.log(strArray.length - 1);


const fs = require('fs')

const filename = process.argv[2]
const buf = fs.readFileSync(filename)
const str = buf.toString();
const count = str.split('\n').length

console.log(count - 1)