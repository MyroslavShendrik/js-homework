
//!завдання 1
//? Створіть слайдер на сторінці, який показує зображення.
//?  При переміщенні слайдера виконуйте деякі дії, наприклад, змінюйте розмір зображення.
//?  Використайте debounce для того, щоб ці дії виконувалися не занадто часто при швидкому
//?  переміщенні слайдера.

//! код:
const slider = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');
//! var1
const resizeImage = _.debounce((value) => {
  image.style.transform = `scale(${value / 50})`;
}, 500);
//! var2
// const resizeImage = () => {
//     const scaleValue = slider.value;
//     image.style.width = `${scaleValue}%`;
// };
// const debouncedResize = _.debounce(resizeImage, 300);
//! картинка заповзає на повзунок 
slider.addEventListener('input', (e) => {
  resizeImage(e.target.value);
});
//!завдання 2
//? Потрібно забезпечити плавне переміщення об'єкту при русі мишкою.
//? Рішення: використовуйте метод debounce з бібліотеки lodash.
//? Встановіть час затримки в мілісекундах, наприклад 100мс, і передайте функцію,
//? яка буде виконуватися при переміщенні мишкою.
//! код:
const area = document.querySelector('.move-area');
const box = document.getElementById('box');

area.addEventListener('mousemove', _.debounce((e) => {
  const x = e.offsetX;
  const y = e.offsetY;

  box.style.left = (x - 25) + 'px'; 
  box.style.top = (y - 25) + 'px'; 
}, 100));
//! зробити окремий область для цього квадрату, де тільки там він може рухатися 