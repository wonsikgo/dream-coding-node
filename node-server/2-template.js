const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const name = 'WonSik';
const courses = [{name: 'HTML'}, {name: 'CSS'}, {name: 'JS'}, {name: 'NODE'}];
const server = http.createServer((req, res) => {
  console.log('incoming...');
  const url = req.url;
  if (url === '/') {
    ejs.renderFile('./template/index.ejs', {name}).then((data) => {
      res.end(data);
    });
  } else if (url === '/courses') {
    ejs.renderFile('./template/courses.ejs', {courses}).then((data) => {
      res.end(data);
    });
  } else {
    ejs.renderFile('./template/notFound.ejs', {name}).then((data) => {
      res.end(data);
    });
  }
  //res.end();
});

server.listen(8080);
