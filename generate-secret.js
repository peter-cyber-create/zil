const crypto = require('crypto');
const secret = crypto.randomBytes(32).toString('base64');
console.log('🔐 Your NEXTAUTH_SECRET:');
console.log(secret);
console.log('');
console.log('📋 Copy this secret and paste it in your .env file');
