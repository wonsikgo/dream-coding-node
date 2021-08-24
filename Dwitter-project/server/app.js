import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';

const app = express();

app.use(express.json());
app.use(helmat());
app.use(cors());
app.use(morgan('tiny'));

app.us('/tweets', tweetsRouter);
app.listen(8080);
