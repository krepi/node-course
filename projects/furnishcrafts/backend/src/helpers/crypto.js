import crypto from 'backend/src/helpers/crypto.js';


const secret = crypto.randomBytes(32).toString('hex');

console.log(`generated : ${secret}`);