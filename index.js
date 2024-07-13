global.__basedir = __dirname;

const dotenv = require('./config/dotenv');
const config = require('./config/config');

console.log("welcome to webhooks sample");
console.log(`Package name:verion ${config.name}:${config.version}`);