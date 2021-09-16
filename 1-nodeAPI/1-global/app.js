const fa = require('fs');

console.log(global);

global.hello = () => {
  global.console.log('hello');
};
global.lesson = () => {
  global.console.log('lesson');
};

global.hello();
global.lesson();
