const PARKING_SIZE = parseInt(process.env.PARKING || 5);

const PARKING = [];

for (let i = 0; i < PARKING_SIZE; i++) {
  PARKING.push({ isAvailable: true, licensePlate: '' });
}

exports.getParkingSlotInfo = (index) => {
  if (index > PARKING.length) {
    return false;
  }
  return PARKING[index - 1];
};
