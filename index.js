global.__basedir = __dirname;

const dotenv = require('./config/dotenv');
const config = require('./config/config');

console.log(`Application running on port - ${config.PORT}`);
console.log(`Package name:verion ${config.name}:${config.version}`);