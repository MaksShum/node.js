const fs = require('fs');

try {
  fs.writeFileSync('./first.txt', 'First file');
  console.log('First file was written');
  fs.appendFileSync('./first.txt', '\nOne more line');
  console.log('appended');
  fs.renameSync('./first.txt', './rename-first.txt');
  console.log('rename');
} catch (error) {
  console.log(error);
}
