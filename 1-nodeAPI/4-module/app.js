/* const counter = require('./counter.js'); */

import {increase, getCount, decrease} from './counter.js';

/* counter.increase();
counter.increase();
counter.increase();
counter.increase(); */

increase();
increase();
increase();
increase();
decrease();
decrease();

console.log(getCount());
