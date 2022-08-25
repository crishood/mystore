const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middleware/error.handler');

const app = express();
const port = 3000;

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({
    name: 'CrisHood',
  });
});

app.listen(port, () => {
  console.log('What up ma G? ' + port);
});
