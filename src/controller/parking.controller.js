const { query, validationResult } = require('express-validator');
const ApiResponse = require('../helpers/response.helper');
const { getParkingSlotInfo } = require('../services/parking.service');

exports.checkSlot = [
  query('slot').not().isEmpty().withMessage('Please send slot'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return ApiResponse.validationErrorWithData(res, 'Validation Error.', errors.array());
    }

    const { slot } = req.query;

    const slotInfo = await getParkingSlotInfo(slot);
    if (!slotInfo) {
      return ApiResponse.resourceNotAvailable(res, 'Invalid slot number!');
    }
    return ApiResponse.successResponseWithData(res, 'Slot Found!', slotInfo);
  },
];
