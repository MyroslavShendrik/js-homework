const images = document.querySelectorAll('.lazyload');

function loadImage(img) {
  img.src = img.dataset.src; 
  img.addEventListener('load', () => {
    img.classList.add('loaded'); 
    console.log(`Зображення "${img.alt}" завантажене`);
  });
}


const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadImage(entry.target);
      obs.unobserve(entry.target); 
    }
  });
}, { threshold: 0.1 });


images.forEach(img => observer.observe(img));
//! розмітка це список а не div 
//! не відповідність розмірів placeholder та відображення 
//! зоображення потрібно завантажити з інтернету 
//! зробити кнопку, коли натискаєм на неї вони починають завантажуватися
//! 9.  Перевірте результати за допомогою інструментів розробника браузера, таких як "Network" або "Performance", щоб переконатися, що зображення завантажуються тільки тоді, коли вони стають видимими на сторінці.