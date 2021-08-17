const fs = require('fs');

const writeStrema = fs.createWriteStream('./file3.txt');
writeStrema.on('finish', () => {
  console.log('finished!');
});

writeStrema.write('hello!');
writeStrema.write('world!');
writeStrema.end();
