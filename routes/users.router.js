const productsRoter = require('./products.router');
// const usersRoter = require('./users.router');

function routerApi(app) {
  app.use('/products', productsRoter);
}
module.exports = routerApi;
