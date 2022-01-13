import 'module-alias/register';

import http from 'http';

import { TypeormHelper } from './database/config';
import app from './app';

import 'dotenv/config';

(async () => {
  await TypeormHelper.connect();

  const httpServer = http.createServer(app);

  const port = process.env.API_PORT || 3000;

  httpServer.listen(port, () => console.log(`Server is running on port ${port}`));
})();
