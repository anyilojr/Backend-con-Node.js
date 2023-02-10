const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
// Importar middleware
const { logErrors, errorHandler, boomErrorHandler } = require('./Middleware/error.handler'); //importar las funciones que se uilizarán

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'http://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin)){
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  }
}
app.use(cors());

app.get('/', (req, res)=> {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res)=> {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

// Utilizamos los middleware. Siempre deben ir después del routing:
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port' + port);
})

