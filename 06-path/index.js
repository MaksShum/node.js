const path = require('path');

const filePath = '/User/95shu/OneDrive/Desctop/Projects/node/index.js';
const textPath = '/User/95shu/OneDrive/Desctop/file.txt';
const relativePath = './node/movie.mov';
const directoryPath = './node/subfolder';

console.log(path.isAbsolute(filePath));
console.log(path.isAbsolute(relativePath));
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.dirname(directoryPath));
console.log(path.resolve(relativePath));
console.log(path.extname(relativePath));
console.log(path.parse(filePath));

console.log(
  path.join(path.parse(filePath).dir, `rename-${path.parse(filePath).name}.mjs`)
);
