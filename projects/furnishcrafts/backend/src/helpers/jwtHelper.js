import crypto from 'crypto';

const secret = process.env.JWT_SECRET ;

// Function to base64url encode a JSON object
function base64urlEncode(obj) {
    return Buffer.from(JSON.stringify(obj))
        .toString('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

// Function to base64url decode a string
function base64urlDecode(str) {
    return JSON.parse(Buffer.from(str, 'base64').toString());
}

// Function to create the JWT signature
function createSignature(header, payload, secret) {
    const data = `${header}.${payload}`;
    return crypto
        .createHmac('sha256', secret)
        .update(data)
        .digest('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

// Function to generate a JWT
function generateJWT(payload) {
    const header = { alg: 'HS256', typ: 'JWT' };
    const encodedHeader = base64urlEncode(header);
    const encodedPayload = base64urlEncode(payload);
    const signature = createSignature(encodedHeader, encodedPayload, secret);
    return `${encodedHeader}.${encodedPayload}.${signature}`;
}

// Function to validate a JWT
function validateJWT(token) {
    const [header, payload, signature] = token.split('.');
    const validSignature = createSignature(header, payload, secret);
    if (signature === validSignature) {
        return base64urlDecode(payload);
    }
    return null;
}

export  {
    generateJWT,
    validateJWT
};
