const fs = require('fs');

// rename(.... ,callback)
// try {renameSync(....)} catch(e) {}
// promisee.rename().then().catch(0)

try {
  fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
  console.error(error);
}

fs.rename('./text-new.txt', './text.txt', (error) => {
  console.error(error);
});

console.log('hello');

fs.promises
  .rename('./text2.txt', './text-new.txt')
  .then(() => {
    console.log('Done!');
  })
  .catch(console.error);
