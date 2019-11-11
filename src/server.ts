import * as express from 'express';

import routes from './routes/routes';

export default class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.routes();
  }

  routes() {
    this.app.use('/', routes);
  }

  listen(port: number) {
    this.app.listen(port, () => console.log(`Server rodando na porta ${port}`));
  }
}
