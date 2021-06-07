import 'dotenv/config';
import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import 'express-async-errors';

import {tmpFolder} from './config/upload';
import routes from './shared/routes';
import GlobalExceptionHandler from './shared/middlewares/globalExceptionHandler';

import './shared/database';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(tmpFolder));
app.use(routes);

app.use(GlobalExceptionHandler);

app.listen(process.env.PORT || 3333, () => {
  console.log(`\nServer started on port ${process.env.PORT}!\n`);
});
