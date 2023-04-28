const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
// const photos = getPhotos(25);
const renderingPicture = (photos) => {
  const pictureFragment = document.createDocumentFragment();
  photos.forEach(({url, likes, comments})=>{
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments;
    pictureFragment.appendChild(picture);
  });
  pictureList.appendChild(pictureFragment);
};
export {renderingPicture};
