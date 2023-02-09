const productsRoter = require('./products.router');
const usersRoter = require('./users.router');

function routerApi(app) {
  app.use('/products', productsRoter);
  // app.use('/users', productsRoter);
  // app.use('/categories', productsRoter);
}
module.exports = routerApi;
