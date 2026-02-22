module.exports = (req, res) => {
  res.json({
    number: process.env.WHATSAPP_NUMBER || '918250930522',
    message: process.env.WHATSAPP_MESSAGE || 'Hi Craftsyyy! I\'m interested in your products.'
  });
};
