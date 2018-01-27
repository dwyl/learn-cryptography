// manually set environment variable for this test:
process.env.ENCRYPTION_KEY = '4EF97BDD9D33E4396D991A21C79F2ASD';
// console.log('ENCRYPTION_KEY:', process.env.ENCRYPTION_KEY.length);
const {encrypt, decrypt} = require('./strong-encrypt-decrypt.js');


var text = "Simplicity is the ultimate sophistication";
console.log("Original Text: " + text);
//
var encryptedText = encrypt(text);
console.log("Encrypted Text: " + encryptedText);
var decryptedText = decrypt(encryptedText);
