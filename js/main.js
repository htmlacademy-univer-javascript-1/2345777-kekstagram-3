// Функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Функция для создания массива объектов фотографий
  function generatePhotosArray() {
    let photos = [];
    let usedIds = [];
    let usedUrls = [];
  
    // Генерируем каждый объект фотографии
    for (let i = 1; i <= 25; i++) {
      // Генерируем уникальный id
      let id = getRandomNumber(1, 25);
      while (usedIds.includes(id)) {
        id = getRandomNumber(1, 25);
      }
      usedIds.push(id);
  
      // Генерируем уникальный url
      let url = `photos/${i}.jpg`;
      while (usedUrls.includes(url)) {
        url = `photos/${getRandomNumber(1, 25)}.jpg`;
      }
      usedUrls.push(url);
  
      // Генерируем описание фотографии
      let description = `Фото ${i}`;
  
      // Генерируем количество лайков и комментариев
      let likes = getRandomNumber(15, 200);
      let comments = getRandomNumber(0, 200);
  
      // Создаем объект фотографии и добавляем его в массив
      let photo = {id, url, description, likes, comments};
      photos.push(photo);
    }
  
    return photos;
  }
  
  // Тестирование функции
  console.log(generatePhotosArray());