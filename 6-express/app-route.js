import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';

const app = express();

app.use(express.json()); //REST API Body parse
app.use(express.urlencoded({extended: false})); //HTML Form => Body
app.use(express.static('public'));

app.use('/posts', postRouter);
app.use('/users', userRouter);

app.use((req, res, next) => {
  res.status(404).end('Not Found');
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({message: 'Something went wrong'});
});

app.listen(8080);
