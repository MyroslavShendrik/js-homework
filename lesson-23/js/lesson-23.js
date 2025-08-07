
const lazyImages = document.querySelectorAll('.lazyload');

lazyImages.forEach((img, index) => {
  img.addEventListener('lazybeforeunveil', () => {
    console.log(` Зображення ${index + 1} стало видимим і буде завантажене`);
  });

  img.addEventListener('load', () => {
    console.log(` Зображення ${index + 1} завантажене`);
  });

  img.addEventListener('lazyloaded', () => {
    console.log(` Зображення ${index + 1} повністю готове і з'явилося`);
  });
});