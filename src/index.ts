import 'module-alias/register';

import http from 'http';

import app from './app';

const httpServer = http.createServer(app);

const port = process.env.API_PORT || 3000;

httpServer.listen(port, () => console.log(`Server is running on port ${port}`));
