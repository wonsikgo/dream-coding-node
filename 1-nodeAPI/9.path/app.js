const path = require('path');

// POSIX (UNIX: Mac, Linux) : 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

//basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

//dirname
console.log(path.dirname(__filename));

//extension
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename);
console.log(parsed);

const str = path.format(parsed);
console.log(str);

//isAbsolute
console.log(`isAbsolute`, path.isAbsolute(__dirname));
console.log(`isAbsolute`, path.isAbsolute('../'));

//normalize
console.log(path.normalize('./folder///////sub'));

//join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));
