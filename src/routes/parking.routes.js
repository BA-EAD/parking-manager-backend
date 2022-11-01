module.exports = (app) => {
  const router = require('express').Router();
  const Parking = require('../controller/parking.controller');

  router.get('/slot', Parking.checkSlot);
  router.post('/park', Parking.parkCar);

  app.use('/', router);
};
