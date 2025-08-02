
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
const box = document.getElementById('box');

const moveBox = _.debounce((x, y) => {
  box.style.transform = `translate(${x}px, ${y}px)`;
}, 300);

window.addEventListener('mousemove', (e) => {
  moveBox(e.clientX, e.clientY);
});
//! зробити окремий область для цього квадрату, де тільки там він може рухатися 