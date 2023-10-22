const isRuning = true;

setTimeout(() => (isRuning = false), 10);
process.nextTick(() => console.log('n1'));

while (isRuning) {
  console.log('While loop is runing');
}
