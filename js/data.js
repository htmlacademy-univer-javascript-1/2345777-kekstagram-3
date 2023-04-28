import {getRandomPositiveInteger} from './validation.js';

const DESCRIPTIONS = ['nice', 'bad', 'good'];

function getPhotos (num) {
  const photos = new Array(num);
  for (let i = 1; i <= photos.length; i++) {
    photos[i - 1] = {
      id: i,
      url: `photos/${i}.jpg`,
      description: DESCRIPTIONS[getRandomPositiveInteger(0, 2)],
      likes: getRandomPositiveInteger(15, 200),
      comments: getRandomPositiveInteger(0, 200)
    };
  }
  return photos;
}

export {getPhotos};
