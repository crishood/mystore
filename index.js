const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.json({
    name: 'CrisHood',
  });
});

app.listen(port, () => {
  console.log('What up ma G? ' + port);
});