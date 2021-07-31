const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(callback) {
    this.emit('log', 'started...');
    callback();
    this.emit('log', 'end...');
  }
}
function log(callback) {
  emitter.emit('log', 'started...');
  callback();
  emitter.emit('log', 'end...');
}

module.exports.Logger = Logger;
