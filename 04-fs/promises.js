const fs = require('fs/promises');

fs.writeFile('./first.txt', 'First file')
  .then(() => console.log('First file was written'))
  .then(() => fs.appendFile('./first.txt', '\nOne more line'))
  .then(() => console.log('appended'))
  .then(() => fs.rename('./first.txt', './rename-first.txt'))
  .then(() => console.log('rename'))
  .catch(() => console.log(err));
