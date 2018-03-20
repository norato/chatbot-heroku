import * as express from 'express';

class App {
  

  public express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }
  
  private mountRoutes() {
    const router = express.Router()
    this.setCors(router);

    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })
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