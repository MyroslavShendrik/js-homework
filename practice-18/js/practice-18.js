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
console.warn("Навігація або пошуку елементів в DOM-дереві:");
// console.log(document);
console.log("document:", document);

const body = document.body;
// console.log(body);
console.log("body = document.body:", body);
console.log("document.body.parentNode:", document.body.parentNode); //! </html>
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------");


const list = document.querySelector(".list");
// console.log(list);
console.log('list = document.querySelector(".list"):', list);
console.log("list.parentNode:", list.parentNode); //! body
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------");


const listItemsNodes = list.childNodes;
// console.log(listItemsNodes);
console.log('listItemsNodes = list.childNodes:', listItemsNodes); //! [text, li, text, li, text, li, text, li, text, li, text]

const listItems = list.children;
// console.log(listItems);
console.log('listItems = list.children:', listItems); //! HTMLCollection(5) [li, li, li, li, li]
console.log("                                              ");


const firstListChild = list.firstChild;
// console.log(firstListChild);
console.log('firstListChild = list.firstChild:', firstListChild); //! #text 

const firstListElementChild = list.firstElementChild;
// console.log(firstListElementChild);
console.log('firstListElementChild = list.firstElementChild:', firstListElementChild); //! <li>First item</li>

const lastListChild = list.lastChild;
// console.log(lastListChild);
console.log('lastListChild = list.lastChild:', lastListChild); //! #text 

const lastListElementChild = list.lastElementChild;
// console.log(lastListElementChild);
console.log('lastListElementChild = list.lastElementChild:', lastListElementChild); //! <li>Fifth item</li>
console.log("                                              ");


const previousListSibling = list.previousSibling;
// console.log(previousListSibling);
console.log('previousListSibling = list.previousSibling:', previousListSibling); //! #text 

const previousListElementSibling = list.previousElementSibling;
// console.log(previousListElementSibling);
console.log('previousListElementSibling = list.previousElementSibling:', previousListElementSibling); //! <h2 class="title-section">...</h2>

const nextListSibling = list.nextSibling;
// console.log(nextListSibling);
console.log('nextListSibling = list.nextSibling:', nextListSibling); //! #text 

const nextListElementSibling = list.nextElementSibling;
// console.log(nextListElementSibling);
console.log('nextListElementSibling = list.nextElementSibling:', nextListElementSibling); //! <button class="button-2" style="background-color: green; color: yellow; box-shadow: rgb(150, 150, 150) 3px 3px 4px;">On</button>

//? ❗️❗️❗️ DOM-колекції, 
//? як-от childNodes і children 
//? - псевдомасиви (NodeList), 
//? у них немає більшості методів масиву.
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------");