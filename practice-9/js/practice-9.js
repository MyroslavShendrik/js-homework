//! Присвоєння за значенням
console.warn("Присвоєння за значенням:");
//? ✴️ За умови передачі за значенням,
//? змінним виділяється нова комірка пам'яті
//? і в неї копіюються дані.
//? ✳️ Присвоєння за значенням: в пам'яті буде створена ще
//? одна комірка, в яку буде скопійоване значення 5
let a = 5;
let b = a;
console.log("a:", a); //! 5
console.log("b:", b); //! 5
console.log(". . . .");

//? ✳️ Змінимо значення a на 10:
a = 10;
console.log("a:", a); //! 10
//? ✳️ Значення b не змінилося, оскільки це окрема копія:
console.log("b:", b); //! 5
console.log("--------------------------------------");


//! Присвоєння за посиланням 
console.warn("Присвоєння за посиланням:");
//? ✴️ Складні типи - об'єкти, масиви, функції присвоюються за посиланням,
//? тобто змінна просто отримує посилання на вже існуючий об'єкт.
//? ✳️ Оскільки arrA - це масив, в arrB записується посилання на вже існуючий
//? в пам'яті масив arrA. Тепер arrA і arrB вказують на один і той же масив:
const arrA = ["Mango"];
const arrB = arrA;
console.log("arrA:", arrA); //! ['Mango']
console.log("arrB:", arrB); //! ['Mango']
console.log(". . . . . . . . . . . . . . . . . . . .");

//? ✳️ Змінимо масив, додавши ще один елемент,
//? використовуючи вказівник з arrA:
arrA[1] = "Poly"; //todo: var.1
// arrA.push("Poly"); //todo: var.2
console.log("arrA:", arrA); //! ['Mango', 'Poly']

//? ✳️ arrB також змінилось, тому що arrB,
//? як і arrA, просто містять посилання на 
//? одне і те ж саме місце в пам'яті:
console.log("arrB:", arrB); //! ['Mango', 'Poly']
console.log(". . . . . . . . . . . . . . . . . . . .");

//? ✳️ Результат повторюється, 
//? якщо додати ще один елемент до arrB:
// arrB[arrB.length] = "Ajax"; //todo: var.1
arrB.push("Ajax"); //todo: var.2
console.log("arrA:", arrA); //! ['Mango', 'Poly', 'Ajax']
console.log("arrB:", arrB); //! ['Mango', 'Poly', 'Ajax']
console.log("--------------------------------------");



//! Метод split()
console.warn("Метод split():");
//? Метод split(delimiter) перетворює рядок в масив,
//? «розбиваючи» його роздільником delimiter.
//? Якщо роздільник - це порожній рядок,
//? то створиться масив окремих символів.
//? Роздільником може бути один або декілька символів.
const string = "Mango";
console.log('string:', string);
const stringToArr = string.split(" ");
console.log('string.split(""):', stringToArr); //! ['M', 'a', 'n', 'g', 'o']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");

const message = "JavaScript - це цікаво";
console.log('message:', message);
let messageArr = message.split("");
console.log('messageArr = message.split(" "):', messageArr); //! ['JavaScript', '-', 'це', 'цікаво']
console.log("--------------------------------------------------------------------------");


//! Метод join()
console.warn("Метод join():");
//? Метод масивів join(delimiter)
//? об'єднує елементи масиву у рядок.
//? У рядку елементи будуть розділені символом
//? або групою символів, зазначених в delimiter.
//? Тобто ця операція протилежна методу рядків split(delimiter).
messageArr = ["JavaScript", "це", "цікаво"];
console.log('messageArr:', messageArr);
console.log('messageArr.join(""):', messageArr.join("")); //! "JavaScriptцецікаво"
console.log('messageArr.join(" "):', messageArr.join(" ")); //! "JavaScript це цікаво"
console.log('messageArr.join("-"):', messageArr.join("-")); //! "JavaScript-це-цікаво"
console.log("--------------------------------------------------------------------------");

//! Метод indexOf()
console.warn("Метод indexOf():");
//? indexOf(value) повертає перший індекс,
//? в якому елемент зі значенням value
//? був знайдений в масиві, або число -1,
//? якщо такий елемент відсутній.
//? Використовуйте indexOf тоді,
//? коли необхідно отримати сам індекс елемента.
let clientsArr = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
console.log("clientsArr:", clientsArr); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log('clientsArr.indexOf("Poly"):', clientsArr.indexOf("Poly")); //! 2
console.log('clientsArr.indexOf("Monkong"):', clientsArr.indexOf("Monkong")); //! -1
console.log("----------------------------------------------------");


//! Метод includes()
console.warn("Метод includes():");
//? includes(value) перевіряє, чи містить масив
//? елемент зі значенням value і повертає true
//? або false відповідно.
//? Застосування цього методу корисне в ситуаціях,
//? коли необхідно перевірити,
//? чи є елемент в масиві і не важлива його позиція (індекс).
clientsArr = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log("clientsArr:", clientsArr); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log('clientsArr.includes("Poly"):', clientsArr.includes("Poly")); //! true
console.log('clientsArr.includes("Monkong"):', clientsArr.includes("Monkong")); //! false
console.log("----------------------------------------------------");

//! 4.Методи push() і pop() та unshift() і shift()
console.warn("Методи push() і pop() та unshift() і shift(): \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_08/images/methods-push-pop-unshift-shift.jpg");
//? Додають або видаляють крайні елементи масиву.
//? Працюють тільки з крайнім лівим
//? і крайнім правим елементом,
//? і не можуть вставити або видалити
//? елемент з довільної позиції.


//! Метод push()
console.warn("Метод push(): \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_08/images/push.png");
//? Метод push() додає один або декілька елементів
//? наприкінці масиву, без необхідності зазначати
//? індекси елементів, що додаються.
//? ПОВЕРТАЄ довжину масиву після додавання елементів.
const array= [];
console.log("array:", array); //! []
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

let push = array.push("first");
console.log('array.push("first"):', array); //! ['first']
console.log("push:", push); //! 1
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

push = array.push("second");
console.log('array.push("second"):', array); //! ['first', 'second']
console.log("push:", push); //! 2
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

push = array.push("third");
console.log('array.push("third"):', array); //! ['first', 'second', 'third']
console.log("push:", push); //! 3
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

push = array.push("fourth");
console.log('array.push("fourth"):', array); //! ['first', 'second', 'third', 'fourth']
console.log("push:", push); //! 4
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

push = array.push("fifth");
console.log('array.push("fifth"):', array); //! ['first', 'second', 'third', 'fourth', 'fifth']
console.log("push:", push); //! 5
console.log("-------------------------------------------------------------------------------");


//! Метод pop()
console.warn("Метод pop(): \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_08/images/pop.png");
//? Метод pop() видаляє останній елемент з кінця масиву
//? і ПОВЕРТАЄ видалений елемент. 
//? Якщо масив порожній, метод ПОВЕРТАЄ undefined.
console.log("array:", array); //! ['first', 'second', 'third', 'fourth', 'fifth']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

let pop = array.pop();
console.log('array.pop():', array); //! ['first', 'second', 'third', 'fourth']
console.log("pop:", pop); //! 'fifth'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = array.pop();
console.log('array.pop():', array); //! ['first', 'second', 'third']
console.log("pop:", pop); //! 'fourth'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = array.pop();
console.log('array.pop():', array); //! ['first', 'second']
console.log("pop:", pop); //! 'third'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = array.pop();
console.log('array.pop():', array); //! ['first']
console.log("pop:", pop); //! 'second'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = array.pop();
console.log('array.pop():', array); //! []
console.log("pop:", pop); //! 'first'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = array.pop();
console.log('array.pop():', array); //! []
console.log("pop:", pop); //! undefined
console.log("-------------------------------------------------------------------------------");


//! Метод unshift()
console.warn("Метод unshift():");
//? Метод unshift() додає один або декілька елементів
//? в початок масиву, без необхідності зазначати
//? індекси елементів, що додаються.
//? ПОВЕРТАЄ довжину масиву після додавання елементів.
console.log("array:", array); //! []
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");



let unshift = array.unshift("fifth");
console.log('array.unshift("fifth"):', array); //! ['fifth']
console.log("unshift:", unshift); //! 1
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

unshift = array.unshift("fourth");
console.log('array.unshift("fourth"):', array); //! ['fourth', 'fifth']
console.log("unshift:", unshift); //! 2
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

unshift = array.unshift("third");
console.log('array.unshift("third"):', array); //! ['third', 'fourth', 'fifth']
console.log("unshift:", unshift); //! 3
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

unshift = array.unshift("second");
console.log('array.unshift("second"):', array); //! ['second', 'third', 'fourth', 'fifth']
console.log("unshift:", unshift); //! 4
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

unshift = array.unshift("first");
console.log('array.unshift("first"):', array); //! ['first', 'second', 'third', 'fourth', 'fifth']
console.log("unshift:", unshift); //! 5
console.log("-------------------------------------------------------------------------------");


//! Метод shift()
console.warn("Метод shift():");
//? Метод shift() видаляє елемент з початку масиву
//? і ПОВЕРТАЄ видалений елемент. 
//? Якщо масив порожній, метод ПОВЕРТАЄ undefined.
console.log("array:", array); //! ['first', 'second', 'third', 'fourth', 'fifth']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

let shift = array.shift();
console.log('array.shift():', array); //! ['second', 'third', 'fourth', 'fifth']
console.log("shift:", shift); //! 'first'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

shift = array.shift();
console.log('array.shift():', array); //! ['third', 'fourth', 'fifth']
console.log("shift:", shift); //! 'second'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

shift = array.shift();
console.log('array.shift():', array); //! ['fourth', 'fifth']
console.log("shift:", shift); //! 'third'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

shift = array.shift();
console.log('array.shift():', array); //! ['fifth']
console.log("shift:", shift); //! 'fourth'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

shift = array.shift();
console.log('array.shift():', array); //! []
console.log("shift:", shift); //! 'fifth'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

shift = array.shift();
console.log('array.shift():', array); //! []
console.log("shift:", shift); //! undefined
console.log("-------------------------------------------------------------------------------");
