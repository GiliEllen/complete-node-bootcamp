const fs = require('fs');
const { text } = require('stream/consumers');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `this is what we know about avacado: ${textIn}.\ncreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('file written');
