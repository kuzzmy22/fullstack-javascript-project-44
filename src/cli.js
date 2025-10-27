// src/cli.js (для "type": "commonjs" в package.json)
const readlineSync = require('readline-sync');

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

module.exports = greeting;
