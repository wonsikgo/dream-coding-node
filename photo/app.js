const fs = require('fs');
const path = require('path');
const os = require('os');

// 1. 사용자가 원하는 폴더의 이름을 받아온다
const folder = process.argv[2];
const workingDir = path.join('E:\\VScode-projects\\Node\\dream-coding-node\\photo\\', 'Pictures', folder);
//if (!folder || !fs.existsSync(workingDir)) {
if (!folder || !fs.existsSync(workingDir)) {
  console.error('Please enter folder name in  Pictures');
  return;
}

// 2. 그 폴더안에 video, captured, duplicated 폴더를 만든다.
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

// 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4/mov, png/aae, IMG_1234 (IMG_E1234) 옴긴다.
fs.promises
  .readdir(workingDir) //
  .then((files) => processFile(files))
  .catch(console.log);

function processFile(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      //console.log('video', file);
      moveBy(file, videoDir);
    } else if (isCapturedFile(file)) {
      moveBy(file, capturedDir);
      //console.log('captrued', file);
    } else if (isDuplicatedFile(files, file)) {
      moveBy(file, duplicatedDir);
      //console.log('duplicated', file);
    }
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isCapturedFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isDuplicatedFile(files, file) {
  if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
    return false;
  }

  const edited = `IMG_E${file.split('_')[1]}`;
  const found = files.find((f) => f.includes(edited));
  return !!found;
}

function moveBy(file, dir) {
  console.info(`move ${file} to ${dir}`);
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(dir, file);
  fs.promises
    .rename(oldPath, newPath) //
    .catch(console.error);
}
