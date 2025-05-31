console.warn(`Навігаця між вузлами DOM: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_17/images/dom-traversal.png"}`);
//? ✴️ Для навігації по цій ієрархії елементи мають наступні властивості:
console.log(
    `%c
    elem.parentNode - вибере батьківський elem.

    elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
    elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.

    elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
    elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
    elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
    elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.

    elem.previousSibling - вибере елемент «зліва» (той, що вище) від elem (його попереднього сусіда).
    elem.previousElementSibling - вибере вузол-елемент «зліва» (той, що вище) від elem (його попереднього сусіда).
    elem.nextSibling - вибере елемент «праворуч» (той, що нижче) від elem (його наступного сусіда)
    elem.nextElementSibling - вибере вузол-елемент «праворуч» (той, що нижче) від elem (його наступного сусіда).
    `,
    'color: darkred; font-size: 16px',
);
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------");




//! Навігація або пошуку елементів в DOM-дереві
// console.warn("Навігація або пошуку елементів в DOM-дереві:");
// // console.log(document);
// console.log("document:", document);

// const body = document.body;
// // console.log(body); 
// console.log("body = document.body:", body);
// console.log("document.body.parentNode:", document.body.parentNode); //! </html>
// console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------");


// const list = document.querySelector(".list");
// // console.log(list);
// console.log('list = document.querySelector(".list"):', list);
// // console.log("list.parentNode:", list.parentNode); //! body   
// console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------");


// // const listItemsNodes = list.childNodes;
// // console.log(listItemsNodes);
// console.log('listItemsNodes = list.childNodes:', listItemsNodes); //! [text, li, text, li, text, li, text, li, text, li, text]

// const listItems = list.children;
// // console.log(listItems);
// console.log('listItems = list.children:', listItems); //! HTMLCollection(5) [li, li, li, li, li]
// console.log("                                              ");


// const firstListChild = list.firstChild;
// // console.log(firstListChild);
// console.log('firstListChild = list.firstChild:', firstListChild); //! #text 

// const firstListElementChild = list.firstElementChild;
// // console.log(firstListElementChild);
// console.log('firstListElementChild = list.firstElementChild:', firstListElementChild); //! <li>First item</li>

// const lastListChild = list.lastChild;
// // console.log(lastListChild);
// console.log('lastListChild = list.lastChild:', lastListChild); //! #text 

// const lastListElementChild = list.lastElementChild;
// // console.log(lastListElementChild);
// console.log('lastListElementChild = list.lastElementChild:', lastListElementChild); //! <li>Fifth item</li>
// console.log("                                              ");


// const previousListSibling = list.previousSibling;
// // console.log(previousListSibling);
// console.log('previousListSibling = list.previousSibling:', previousListSibling); //! #text 

// const previousListElementSibling = list.previousElementSibling;
// // console.log(previousListElementSibling);
// console.log('previousListElementSibling = list.previousElementSibling:', previousListElementSibling); //! <h2 class="title-section">...</h2>

// const nextListSibling = list.nextSibling;
// // console.log(nextListSibling);
// console.log('nextListSibling = list.nextSibling:', nextListSibling); //! #text 

// const nextListElementSibling = list.nextElementSibling;
// // console.log(nextListElementSibling);
// console.log('nextListElementSibling = list.nextElementSibling:', nextListElementSibling); //! <button class="button-2" style="background-color: green; color: yellow; box-shadow: rgb(150, 150, 150) 3px 3px 4px;">On</button>

//? ❗️❗️❗️ DOM-колекції, 
//? як-от childNodes і children 
//? - псевдомасиви (NodeList), 
//? у них немає більшості методів масиву.
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------");


//! Методи elem.querySelector* 
console.warn("Методи elem.querySelector*:");
//? ✳️ Отже, ми вже знаємо що DOM-елемент
//? - це об'єкт з властивостями і методами.
//? Навчимось швидко знаходити елемент
//? за довільним CSS-селектором.
//? Група методів ❗️elem.querySelector*❗️
//? - це сучасний стандарт для пошуку елементів.
//? Вони дозволяють знайти елемент або групу елементів 
//? за CSS-селектором будь-якої складності.
console.log(
    `%c
    element.querySelector(selector);
    `,
    'color: darkred; font-size: 16px',
);
//? ✴️ Використовується, якщо необхідно знайти тільки ❗️один❗️,
//? найчастіше унікальний елемент.
//? 🔸 Повертає перший знайдений елемент всередині element,
//?    що відповідає CSS-селектору selector.
//? 🔸 Якщо нічого не знайдено, поверне null.
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
console.log(
    `%c
    element.querySelectorAll(selector);

    `,
    'color: darkred; font-size: 16px',
);
//? ✴️ Використовується, якщо необхідно знайти ❗️колекцію❗️ елементів,
//? тобто отримати масив посилань на елементи з однаковим селектором.
//? Наприклад, всі елементи списку з класом menu-item.
//? 🔸 Повертає псевдомасив всіх елементів всередині element,
//?    які відповідають CSS-селектору selector.
//? 🔸 Якщо нічого не знайдено, поверне порожній масив.
console.log("---------------------------------------------------------------------------------------------------------------------------------------------");

// const listWithId = document.querySelector('#menu'); //todo: var.1
// const listWithId = document.querySelector('.menu'); //todo: var 1.1
// const listWithId = document.querySelector('ul'); //todo: var 1.2
// const listWithId = document.querySelectorAll('.menu li'); //todo: var 1.3
const listWithId = document.getElementById('menu'); //todo: var.2
console.log("listWithId:",listWithId);
// listWithId.style.textTransform = 'uppercase'; //todo: зміна властивості:  text-transform: uppercase;
// listWithId.style.fontSize = '24px'; //todo: зміна властивості:  font-size: 24px;
// console.log("listWithId = document.querySelector('#menu'):", listWithId);

const listWithClass = document.querySelector('.menu');
console.log("listWithClass = document.querySelector('.menu'):", listWithClass);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const menuItemsByTagName = document.querySelectorAll("li"); //! 10
console.log('menuItemsByTagName = document.querySelectorAll("li"):', menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item"); //! 3 
console.log('menuItemsByClass = document.querySelectorAll(".menu-item"):', menuItemsByClass);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = 'tomato';
console.log('firstMenuItem = document.querySelector(".menu-item"):', firstMenuItem);
console.log("---------------------------------------------------------------------------------------------------------------------------------------------");

const alltMenuItem = document.querySelectorAll(".menu-item");
console.log("allMenuItem:",alltMenuItem);
// alltMenuItem.style.color = 'green'; //! Error: Cannot set properties of undefined (setting 'color')
//todo: зміна властивості ВСІХ елементів :  color: green;
for (const element of alltMenuItem) {
    element.style.color = 'green';
};
console.log('alltMenuItem = document.querySelectorAll(".menu-item"):', alltMenuItem);



//! Властивість textContent​
console.warn("Властивість textContent​:");
//? ✴️ elem.textContent 
//? - повертає текстовий контент всередині елемента. 
//? Доступний для читання і запису. 
//? Неважливо, що буде передано в textContent, 
//? дані завжди будуть записані як текст.
const elementFirst = document.querySelector(".menu-item2");
console.log("elementFirst:", elementFirst); //! <li class="menu-item2">logo</li>

const textElementFirst = elementFirst.textContent;
console.log("textElementFirst = elementFirst.textContent:", textElementFirst); //! logo
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const elementSecond = elementFirst.nextElementSibling;
console.log("elementSecond.textContent:", elementSecond.textContent); //! home
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

elementSecond.textContent = 'HOME-page';
console.log("elementSecond.textContent:", elementSecond.textContent); //! home
console.log("elementSecond = elementFirst.nextElementSibling:", elementSecond); //! <li class="menu-item2">HOME-page</li>
console.log("----------------------------------------------------------------------------------------------------------------------------------------");

const boxElemet = document.querySelector('.box');
console.log("boxElemet;", boxElemet);
boxElemet.textContent = "fun"
console.log(boxElemet.textContent);





//! Властивість classList
console.warn("Властивість classList:");
//? ✴️ У властивості classList
//? зберігається об'єкт з методами
//? для роботи з класами елемента:
//? 🔸 elem.classList.contains(class)
//?  - повертає true або false,
//?  залежно від наявності класу class в елемента.

//? 🔸 elem.classList.add(class)
//?  - додає клас class до списку класів елемента.

//? 🔸 elem.classList.remove(class)
//?  - видаляє клас class зі списку класів елемента.

//? 🔸 elem.classList.toggle(class)
//?  - якщо відсутній клас class, то додає його,
//?  якщо - присутній, навпаки - видаляє.

//? 🔸 elem.classList.replace(oldClass, newClass)
//? - замінює існуючий клас oldClass на вказаний newClass.
//todo: Перевірка на наявність:
console.log('elementSecond.classList.contains("menu-item"):', elementSecond.classList.contains("menu-item")); //! false
console.log('elementSecond.classList.contains("menu-item2"):', elementSecond.classList.contains("menu-item2")); //! true
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo: Додавання:
elementSecond.classList.add("second"); //todo: додаємо клас "second"
console.log('elementSecond.classList.contains("second"):', elementSecond.classList.contains("second")); //! true
console.log("elementSecond:", elementSecond); //! <li class="menu-item2 second">HOME-page</li>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo: Видалення:
elementSecond.classList.remove("second"); //todo: видаляємо клас "second"
console.log('elementSecond.classList.contains("second"):', elementSecond.classList.contains("second")); //! false
console.log("elementSecond:", elementSecond); //! <li class="menu-item2">HOME-page</li>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

// //todo: Додавання або видалення:
elementSecond.classList.toggle("second"); //todo: додаємо або видаляємо клас "second"
console.log('elementSecond.classList.contains("second"):', elementSecond.classList.contains("second")); //! false або true
console.log("elementSecond:", elementSecond); //! <li class="menu-item2">HOME-page</li> або <li class="menu-item2 second">HOME-page</li>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

// //todo: Заміна:
elementSecond.classList.replace("second", "secondNew"); //todo: замінюємо клас "second" на клас "secondNew"
console.log('elementSecond.classList.contains("second"):', elementSecond.classList.contains("second")); //! false
console.log('elementSecond.classList.contains("secondNew"):', elementSecond.classList.contains("secondNew")); //! true
console.log("elementSecond:", elementSecond); //! <li class="menu-item2">HOME-page</li> або <li class="menu-item2 secondNew">HOME-page</li>
console.log("----------------------------------------------------------------------------------------------------------------------------------------");


//! Властивість style
console.warn("Властивість style:");
//? ✴️ Використовується для
//? читання та зміни інлайнових стилів.
//? Повертає об'єкт CSSStyleDeclaration,
//? який містить список усіх властивостей,
//? визначених тільки у вбудованих стилях елемента,
//? а не весь CSS❗️❗️❗️.
//? ❗️Під час запису властивості записуються в camelCase❗️, 
//? тобто background-color перетворюється на element.style.backgroundColor тощо.
const elementLast = document.querySelector(".menu-itemLast");

const textElementLast = elementLast.textContent;
console.log("textElementLast = elementLast.textContent:", textElementLast); //! blog

//todo: Змінюємо властивості:
elementLast.style.fontSize = "24px";
elementLast.style.textAlign = "center";
elementLast.style.color = "tomato";
elementLast.style.backgroundColor = "teal";
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log("elementFirst:", elementLast); //! <li class="menu-itemLast" style="font-size: 24px; text-align: center; color: tomato; background-color: teal;">blog</li>
console.log("elementLast.style:", elementLast.style); //! CSSStyleDeclaration - inline styles object
console.log("----------------------------------------------------------------------------------------------------------------------------------------");
