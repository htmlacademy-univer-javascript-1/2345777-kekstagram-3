const randint = function (min, max){
  if (max < min && max >= 0 && min >= 0) {
    return 0;
  }
  return Math.floor(Math.random * (max - min + 1) + min);
};


const permittedString = function (str, permLen){
  if (str.length > permLen) {
    return false;
  }
  return true;
};

export{
  randint,
  permittedString
};

const getLastArrElem = (arr) => arr ? arr[arr.length - 1] : null;

const isEscKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

export {getRandomIntFromRange, getRandomArrElem, hasLegalLength, createIdGenerator, isEscKey, isEnterKey, getLastArrElem};
