// @flow

import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import datasource from './config/datasource';
import usersRouter from './src/routes/users';
import authRouter from './src/routes/auth';
import authorization from './auth';

const app = express();
app.config = config;
app.datasource = datasource(app);

app.set('port', 7000);
app.use(bodyParser.json());
const auth = authorization(app);
app.use(auth.initialize());
app.auth = auth;
usersRouter(app);
authRouter(app);

export default app;
