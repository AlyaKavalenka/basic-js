const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity < 0 || sampleActivity > 15) return false;
  console.log("sample " + sampleActivity);
  let numerator = Math.log(MODERN_ACTIVITY/sampleActivity);
  let denominator = 0.693 / HALF_LIFE_PERIOD;
  t = Math.ceil(numerator/denominator);
  if (Number.isFinite(t)) {
    console.log("result finite " + t);
    return t;
  }else{
    console.log ("return false");
    return false;
  }
}

module.exports = {
  dateSample
};
