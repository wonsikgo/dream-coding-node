const fs = require('fs');
const path = require('path');
const os = require('os');

// 계획
// 1. 사용자가 원하는 폴더의 이름을 받아온다
// 2. 그 폴더안에 video, captured, duplicated 폴더를 만든다.
// 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4/mov, png/aae, IMG_1234 (IMG_E1234) 옴긴다.

const folder = process.argv[2];
console.log(process.argv[2]);
console.log(process.argv);
console.log(os.homedir());
const workingDir = path.join('E:\\VScode-projects\\Node\\dream-coding-node\\photo\\', 'Pictures', folder);
if (!folder || !fs.existsSync(workingDir)) {
  console.error('Please enter folder name in  Pictures');
  return;
}

console.log(workingDir);
