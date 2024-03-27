
// npm i jsonwebtoken
const jwt = require('jsonwebtoken');

// Create a payload with the desired data
const payload = {
    email: "test@user.com"
};

// create a secret key
const secret = "mysecret";

// Generate a token with the payload and a secret key
const token = jwt.sign(payload, secret);
console.log('Generated token:', token);

// Verify the token with the secret key
const verify = jwt.verify(token, secret);
console.log('verified token:', verify);

// Decode the token to get the payload (without verifying)
const decoded = jwt.decode(token);
console.log('Decoded token:', decoded);


