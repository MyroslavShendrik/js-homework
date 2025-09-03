import { success, error, info } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

const keys = ['a','s','d','f','g','h','j','k','l','z'];
let currentKeyIndex = 0;

const keySpan = document.getElementById('key');
const newGameBtn = document.getElementById('new-game');

function setNewKey() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  keySpan.textContent = keys[currentKeyIndex];
}

// Обробник keydown
document.addEventListener('keydown', (event) => {
  if (event.key === keys[currentKeyIndex]) {
    success({
      text: `✅ Правильно! Натиснута "${event.key}"`,
      delay: 1500
    });
    setNewKey();
  } else {
    error({
      text: `❌ Помилка! Потрібно натиснути "${keys[currentKeyIndex]}"`,
      delay: 1500
    });
  }
});

// Обробник keypress (щоб уникнути небажаної поведінки)
document.addEventListener('keypress', (event) => {
  event.preventDefault();
});

// Нова гра
newGameBtn.addEventListener('click', () => {
  setNewKey();
  info({
    text: '🎮 Нова гра почалася! Натискай правильні клавіші.',
    delay: 2000
  });
});

// Початкова установка
setNewKey();