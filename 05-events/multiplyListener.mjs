import { EventEmitter } from 'events'

const myEmitter = new EventEmitter()

myEmitter.on('myEvent',() => console.log('first event'))

myEmitter.on('myEvent',() => console.log('second event'))

setTimeout(() => myEmitter.emit('myEvent'),1000)

myEmitter.on('otherEvent', () => console.log('second event'))

myEmitter.setMaxListeners(25)
console.log(myEmitter.getMaxListeners())
console.log(myEmitter.eventNames())