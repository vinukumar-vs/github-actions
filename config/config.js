const packageJson = require(__basedir+'/package.json');
const dotenv = require('./dotenv');
const packageProps = process.env.PACKAGE_PROPERTIES;

Object.prototype.reduce = function (obj, props) {
  // console.log('props', props);
  let reducedObj = {};
  Object.keys(obj).reduce((prop, num) => {
    // console.log(prop, num);
    if (props?.indexOf(num) > -1) {
      Object.assign(reducedObj, { [num]: obj[num] });
    }

    //return reducedObj;
  }, 0);
  return reducedObj;
};

const appConfig = {};
Object.assign(appConfig, Object.reduce(packageJson, packageProps), {
  isLocalMode: false,
});

Object.assign(appConfig, dotenv?.parsed);
console.log('appConfig', appConfig);

if (process.env.NODE_ENV === 'local') appConfig.isLocalMode = true;

module.exports = appConfig;
