const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (data) => {
    console.log(`Data recieved: ${data}`);
})

customEmitter.emit('response', 'Hello world!')