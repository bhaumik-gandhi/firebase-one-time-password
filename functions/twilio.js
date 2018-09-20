const twilio = require('twilio');

const accountSid = 'AC4cea3fe7ea0b615bb48564555bf48bc3';
const authToken = 'aeda0426d2d2e2c55b3392001d9fdee6';

module.exports = new twilio.Twilio(accountSid, authToken);
