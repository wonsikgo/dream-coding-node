import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined'));

app.use(
  cors({
    origin: ['http:localhost:8080'],
    optionSuccessStatus: 200,
    credentials: true,
  })
);

app.route('/posts').get((req, res, next) => {});

app.get('/', (req, res, next) => {
  console.log(req.body);
  console.log(req.cookies);
  res.send('hi');
});

/* 비동기 요청에대한 에러 핸들링 */
app.get('/file', (req, res) => {
  fs.readFile('/file1.txt', (err, data) => {
    if (err) {
      res.sendStatus(404);
    }
  });
});

/* 동기 요청에대한 에러 핸들링 */
app.get('/file1', (req, res) => {
  try {
    const data = fs.readFileSync('/file1.txt');
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
  }
});

app.get('/file2', (req, res) => {
  fsAsync
    .readFile('/file2.txt')
    .then((data) => res.send(data))
    .cathc((err) => res.sendStatus(404));
});

app.get('/file3', async (req, res) => {
  try {
    const data = await fsAsync.readFile('/file2.txt');
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
  }
});

app.use((req, res, next) => {
  res.status(404).end('Not Found');
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({message: 'Something went wrong'});
});
app.listen(8080);
