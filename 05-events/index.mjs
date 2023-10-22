
import { EventEmitter } from 'events'

const myEmitter = new EventEmitter()

const listener = (name = 'm') => {
    console.log(`timeout event ${name}`)
}
myEmitter.on('timeout', listener )

setTimeout(() => myEmitter.emit('timeout','Maks'),1000)


myEmitter.once('singleEvent', () => console.log('single'))

setTimeout(() => myEmitter.emit('singleEvent'),500)
setTimeout(() => myEmitter.emit('singleEvent'),2000)

setTimeout(() => myEmitter.off('timeout',listener),3000)
setTimeout(() => myEmitter.emit('timeout'),4000)