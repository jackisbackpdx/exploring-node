const Logger = require('./logger');
const logger = new Logger;

logger.on('MessageLogged', (arg) => {
    console.log('Listener Called', arg);
});
logger.log('message recieved');
// log.on('MessageLogged', (args) => {
//     console.log('Listener called', args);
// });