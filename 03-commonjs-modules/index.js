const exportObj = require('./multi-exports');
const hobby = require('./my-modul/single-export')
const {name} = require('./multi-exports')
const length = require('./export-import')

console.log(name);
console.log(hobby);
console.log(length);
