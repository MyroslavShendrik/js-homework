//!завдання 1
const slider = document.querySelector('.slider__input');
  const image = document.querySelector('.slider__image');

  const resizeImage = _.debounce((value) => {
    image.style.transform = `scale(${value / 50})`;
  }, 200); 

  slider.addEventListener('input', (e) => {
    resizeImage(e.target.value);
  });
  //!завдання 2
  const box = document.getElementById('box');

  const moveBox = _.debounce((x, y) => {
    box.style.transform = `translate(${x}px, ${y}px)`;
  }, 0); 

  window.addEventListener('mousemove', (e) => {
    moveBox(e.clientX, e.clientY);
  });