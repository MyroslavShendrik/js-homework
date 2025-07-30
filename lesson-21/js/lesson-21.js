import { galleryItems } from './app.js';
import { openModal, closeModal } from './modal.js';
console.log("galleryItems:", galleryItems);
//? Створи галерею з можливістю кліка по її елементах
//? і перегляду повнорозмірного зображення в модальному вікні.
//? Прев'ю результату подивися за посиланням: https://monosnap.com/file/KKoRHdov8Thm2oWpzURSOg2L6iDCp3

//? ✴️ Розбий завдання на кілька підзадач:

//? 🔸•  Створення і рендер розмітки по масиву даних galleryItems з app.js і наданим шаблоном.
//? 🔸•  Реалізація делегування на галереї ul.js - gallery і отримання url великого зображення.
//? 🔸•  Відкриття модального вікна при натисканні на елементі галереї.
//? 🔸•  Підміна значення атрибута src елемента img.lightbox__image.
//? 🔸•  Закриття модального вікна при натисканні на кнопку button[data - action= ""close - lightbox"].
//? 🔸•  Очищення значення атрибута src елемента img.lightbox__image.
//?     Це необхідно для того, щоб при наступному відкритті модального вікна,
//?     поки вантажиться зображення, ми не бачили попереднє.

//? ✴️ Стартові файли
//? 🔸•  В папці src ти знайдеш стартові файли проєкту з базовою розміткою і готовими стилями:
//?     (https://github.com/goitacademy/javascript-homework/tree/main/homework-08/src).
//? 🔸•  В файлі app.js є масив об'єктів galleryItems, які містять інформацію про зображення:
//?     маленьке зображення, оригінальне і опис.

//? ✴️ Розмітка елемента галереї:

{/* <li class="gallery__item">
    <a
        class="gallery__link"
        href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
    >
        <img
            class="gallery__image"
            src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
            data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
            alt="Tulips"
        />
    </a>
</li> */}

//? Посилання на оригінальне зображення повинне зберігатися в data - атрибуті source на елементі img,
//? і вказуватися в hrefпосилання(це необхідно для доступності).

//? ❗️❗️❗️ ОБОВ’ЯЗКОВО:
//? 🔸•  Закриття модального вікна при натисканні на div.lightbox__overlay.
//? 🔸•  Закриття модального вікна після натискання клавіші ESC.
//? 🔸•  Перегортування зображень галереї у відкритому модальному вікні клавішами "вліво" і "вправо".
//! Код виконаного завдання:


const gal = document.querySelector('.js-gallery');
const box = document.querySelector('.js-lightbox');
const img = document.querySelector('.lightbox__image');
const clsBtn = document.querySelector('[data-action="close-lightbox"]');
const ov = document.querySelector('.lightbox__overlay');

let idx = -1;

gal.innerHTML = galleryItems
  .map(
    (el, i) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${el.original}">
          <img
            class="gallery__image"
            src="${el.preview}"
            data-source="${el.original}"
            data-idx="${i}"
            alt="${el.description}"
          />
        </a>
      </li>`
  )
  .join('');

gal.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;

  const t = e.target;
  img.src = t.dataset.source;
  img.alt = t.alt;
  idx = Number(t.dataset.idx);
  openModal(box);
});

function close() {
  closeModal(box, img);
  idx = -1;
}

clsBtn.addEventListener('click', close);
ov.addEventListener('click', close);

window.addEventListener('keydown', (e) => {
  if (idx === -1) return;

  if (e.key === 'Escape') {
    close();
  }

  if (e.key === 'ArrowRight') {
    idx++;
    if (idx >= galleryItems.length) idx = 0;
    changeImg();
  }

  if (e.key === 'ArrowLeft') {
    idx--;
    if (idx < 0) idx = galleryItems.length - 1;
    changeImg();
  }
});

function changeImg() {
  img.src = galleryItems[idx].original;
  img.alt = galleryItems[idx].description;
}
//! не працює esc та право ліво 
//! треба перенести логіку модального вікна перенести в окремий файл
//! кнопки нема та не працює!
//! додати інформаційні поля скріншот з телеграму 
//! як модальне вікно працювало без js в початковому стані?
