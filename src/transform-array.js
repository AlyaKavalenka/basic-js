// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  console.log("init arr: " + arr);

  if (Array.isArray(arr) === false) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }else {
    copyArray = [];
    let needToSkip = false;
    let lastElemSkiped = false;
    let needToDuplicate = false;
    let lastElemDuplicated = false;
    for (let i = 0; i < arr.length; i++){
      
      console.log("iter: " + i + " array: " + copyArray) 

      if (typeof arr[i] !== 'string') {
        if (!needToSkip) {
          if (needToDuplicate) {
            copyArray.push(arr[i]);
            needToDuplicate = false;
            lastElemDuplicated = true;
          }
         copyArray.push(arr[i]);
        } else {
          needToSkip = false;
          lastElemSkiped = true;
        }
      } else if (arr[i] === '--discard-next') {
        needToSkip = true;        
      } else if (arr[i] === '--discard-prev') {
        if (!lastElemSkiped) {
          if (copyArray.length !== 0) {
            copyArray.splice(-1, 1);
          }
        } else {
          lastElemSkiped = false;
        }
      } else if (arr[i] === '--double-prev') {
        if (!lastElemSkiped){
          if (copyArray.length !== 0) {
            copyArray.splice(i - 1, 0 , copyArray[i - 1])
          }
        } else {
          lastElemSkiped = false;
        }
      } else if (arr[i] === '--double-next') {
          if (copyArray.length - 1 !== i) {
            needToDuplicate = true;
          }
      } else {
        if (!needToSkip) {
          copyArray.push(arr[i]);
         } else {
           needToSkip = false;
           lastElemSkiped = true;
         }
      }
      
    }
    
 
    console.log("output: [1, 2, 3, 1337, 1337, 1337, 4, 5]");
    console.log("result: " + copyArray);
    return copyArray;
  }
}


module.exports = {
  transform
};
