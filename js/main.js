function generateId() {
  const ids = [];
  while (ids.length < 25) {
    const id = Math.floor(Math.random() * 25) + 1;
    if (!ids.includes(id)) {
      ids.push(id);
    }
  }
  return ids;
}

function generateUrl() {
  const urls = [];
  while (urls.length < 25) {
    const url = `photos/${Math.floor(Math.random() * 25) + 1}.jpg`;
    if (!urls.includes(url)) {
      urls.push(url);
    }
  }
  return urls;
}

function generateDescription() {
  const descriptions = [
    "Beautiful sunset over the mountains",
    "Cute puppy playing in the park",
    "Delicious homemade pizza",
    "Amazing view from the top of the building",
    "Colorful street art in the city",
    "Cozy fireplace on a cold winter night",
    "Refreshing cocktail by the pool",
    "Adorable baby laughing and playing",
    "Elegant wedding reception decorations",
    "Fascinating architecture of an old castle"
  ];
  const randomIndex = Math.floor(Math.random() * descriptions.length);
  return descriptions[randomIndex];
}

function generateLikes() {
  return Math.floor(Math.random() * 186) + 15;
}

function generateComments() {
  return Math.floor(Math.random() * 201);
}

function generateObjects() {
  const ids = generateId();
  const urls = generateUrl();
  const objects = [];
  for (let i = 0; i < ids.length; i++) {
    objects.push({
      id: ids[i],
      url: urls[i],
      description: generateDescription(),
      likes: generateLikes(),
      comments: generateComments()
    });
  }
  return objects;
}

const photoArray = generateObjects();