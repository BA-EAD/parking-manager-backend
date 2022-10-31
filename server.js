const express = require('express');
const Cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const logger = require('./src/helpers/logger.helper');

const app = express();
app.use(Cors());

app.use(
  bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: '50mb',
    extended: true,
  })
);
app.use(bodyParser.json());

dotenv.config();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  return res.status(200).send('PARKING MANAGER BACKEND APIs.');
});

const server = app.listen(port, function () {
  logger.info(`Express server listening on port ${port}`);
});

server.timeout = 1200000;
