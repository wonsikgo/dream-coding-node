const fa = require('fs');

console.log(global);

global.hello = () => {
    global.console.log("hello");
}

global.hello();