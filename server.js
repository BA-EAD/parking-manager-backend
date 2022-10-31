const express = require('express');
const Cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const logger = require('./src/helpers/logger.helper');
const { successResponse } = require('./src/helpers/response.helper');

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
  return successResponse(res, 'PARKING MANAGER BACKEND APIs.');
});

require('./src/routes/parking.routes')(app);

const server = app.listen(port, function () {
  console.log(`Express server listening on port ${port}`);
  logger.info(`Express server listening on port ${port}`);
});

server.timeout = 1200000;
