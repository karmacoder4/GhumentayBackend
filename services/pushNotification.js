


const axios = require('axios');
const { ONE_SIGNAL_CONFIG } = require('../config/oneSignal');

async function sendPushNotification(message,imageUrl) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization':'Basic OWJiODQ2ZDgtOWJiZS00NzYwLWFkM2EtNzhlNDU4YjY5ZDNk' 
  };

  const data = {
    app_id: ONE_SIGNAL_CONFIG.APP_ID, 
    included_segments: ['All'], // Send to all users
    contents: { 'en': message }, // Notification message
    big_picture: imageUrl
  };

  try {
    const response = await axios.post('https://onesignal.com/api/v1/notifications', data, { headers });
    console.log('Push notification sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending push notification:', error.response.data);
  }
}




module.exports={
    sendPushNotification
}