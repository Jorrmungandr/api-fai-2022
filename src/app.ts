import express from 'express';

import { router } from './routes';

import { bodyParser, contentType, cors } from '@/middlewares';

const app = express();

// Middlewares
app.use(bodyParser);
app.use(cors);
app.use(contentType);

app.use(router);

export default app;
