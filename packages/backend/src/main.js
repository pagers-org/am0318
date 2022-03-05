import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

require('dotenv').config();

// firebase setting
import { appConfig } from './config';
import am0318Router from './routes/index';

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', am0318Router);

app.listen(appConfig.port, () =>
  console.log('App is listening on url http://localhost:' + appConfig.port),
);
