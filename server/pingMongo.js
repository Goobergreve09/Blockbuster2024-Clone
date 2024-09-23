const db = require('./config/connection'); // Use the existing connection

async function pingMongoDB() {
  try {
    await db.db.admin().command({ ping: 1 });
    console.log('MongoDB is connected. Ping sent successfully.');
  } catch (err) {
    console.error('Error pinging MongoDB:', err);
  }
}

function startPinging() {
  // Ping MongoDB every 5 minutes
  setInterval(pingMongoDB, 5 * 60 * 1000);
}

module.exports = { startPinging };

