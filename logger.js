const os = require('os');
const path = require('path');
const fs = require('fs');
const EventEmitter = require('events');
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify([
            {
                name: 'Jackson',
                state: 'Oregon',
                hobbies: 'Art, Computers, Reading, Music'
            },
            {
                name: 'Jackson',
                state: 'Oregon',
                hobbies: 'Art, Computers, Reading, Music'
            },
        ]));
        res.end();
    }
});

server.listen(3000);
console.log('Listening on port 3000');

class Logger extends EventEmitter {
    log(message) {
        console.log(message);

        this.emit('MessageLogged', { id: 1, url: 'http://' });
    }
}

const totalMem = os.totalmem();
const freeMem = os.freemem();
const filename = path.parse(__filename);

const filesSynchronous = fs.readdirSync('./');
const filesAsynchronous = fs.readdir('./', (err, files) => {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});

// console.log(`Total Memory: ${totalMem}`);
// console.log(`Free Memory: ${freeMem}`);
// console.log(filename);
// console.log(filesSynchronous);
// console.log(filesAsynchronous);

module.exports = Logger;