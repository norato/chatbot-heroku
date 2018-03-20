import * as express from 'express';
import * as path from 'path';

class App {
  

  public express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }
  
  private mountRoutes() {
    const router = express.Router()
    this.setCors(router);

    this.express.use(express.static(path.join(__dirname, '/../build')));

    router.get('/foobar', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })
    router.get('*', (req, res) => {
      res.sendFile(path.join(__dirname+'/../build/index.html'));
    });
    this.express.use('/', router);
  }  

  private setCors(router){
    router.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);
      next();
    });
  }
}

export default new App().express;