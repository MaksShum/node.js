const fs = require('fs');
let isRuning = true;

setTimeout(() => (isRuning = false), 50);
process.nextTick(() => console.log('n1'));

function srtImmediatePromise() {
  return new Promise((resolve, rejects) => {
    setImmediate(() => resolve());
  });
}

async function whileLoop() {
  while (isRuning) {
    console.log('While loop is runing');
    await srtImmediatePromise();
  }
}
whileLoop().then(() => console.log('while end'));
