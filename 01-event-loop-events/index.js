const fs = require('fs');
const dns = require('dns');

function info(text) {
  console.log(text, performance.now().toFixed(2));
}
info('start');
setTimeout(() => info('t1'), 0);
setTimeout(() => {
  process.nextTick(() => info('next tick 2'));
  info('t2');
}, 10);

fs.writeFile('./test.txt', 'Hello Node', () => info('text file'));

Promise.resolve().then(() => info('p1'));

process.nextTick(() => info('next tick'));

setImmediate(() => info('immed'));

let count = 0;
const intervalID = setInterval(() => {
  info(`Interval ${(count += 1)}`);
  if (count === 2) {
    clearInterval(intervalID);
  }
}, 100);

dns.lookup('localhost', (err, adress, family) => {
  info('DNS 1 local', adress);
  Promise.resolve().then(() => info('p2'));
  process.nextTick(() => info('next tick 3'));
});

info('finish');
