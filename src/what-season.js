const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let seasonsMatrix = 
  [
    [11, 0 , 1, 'winter'], //winter
    [2, 3, 4, 'spring'],   //spring
    [5, 6, 7, 'summer'],   //summer
    [8, 9, 10, 'fall']   //fall
  ];
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }
  if (date instanceof Date && !date.hasOwnProperty("toString")) {
    for (let i = 0; i < seasonsMatrix.length; i++) {
      for (let j = 0; j < seasonsMatrix[i].length; j++) {
        if (date.getMonth() === seasonsMatrix[i][j]) {
          return seasonsMatrix[i][3];
        }
      }
    }
  } else {
    throw new Error ("Invalid date!");
  }
}

module.exports = {
  getSeason
};