import express from 'express';

import { bodyParser, contentType, cors } from '@/middlewares';

const app = express();

// Middlewares
app.use(bodyParser);
app.use(cors);
app.use(contentType);

export default app;
