const functRand = function (min, max){
  if (max < min) { return 0; }
  return Math.floor(Math.random * (max - min + 1) + min);
};

functRand(10, 35);

const funCheck = function (str, permLen){
  if (str.length > permLen) { return false; }
  return true;
};

funCheck('Five', 5);

function arrayOfPhotos() {
  const resultArray = new Array(25);
  for (let i = 0; i < resultArray.length; i++) {

    resultArray[i] = (
      {
        id: i + 1,
        url: `photos/${i+1}.png`,
        description:'море',
        likes: random(15,200),
        comments: random(0, 200)
      }
    );
  }
  return resultArray;
}
