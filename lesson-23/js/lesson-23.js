const images = document.querySelectorAll('.lazy-img');

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