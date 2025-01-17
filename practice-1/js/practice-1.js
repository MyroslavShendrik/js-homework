console.log('Practice-1 JS');
//! Код виконаного завдання
//? Код виконаного завдання
//* Код виконаного завдання
//todo Код виконаного завдання
const age = 16;
console.log(age);

// let myAge;
let myAge = null;
console.log(typeof myAge);
console.log(myAge);

myAge = 17;
console.log(myAge);

myAge = 18;
console.log(myAge);

const myName = "Myroslav";
console.log(myName);

console.log('------------');
console.log('10');
console.log(10);
console.log("Myroslav")
console.log(2008)
console.log('------------');
const typeMyAge = typeof myAge;
console.log("typeMyAge:", typeMyAge);
const typeMyName = typeof myName;
console.log("тип зміної myName:", typeMyName);
const isMan = true;
console.log("стать чоловіча?:", isMan);
const typeIsMan = typeof isMan;
console.log("тип змінної isMan :", typeIsMan);

// lesson2
console.log("lesson-2");
const myNumber = 10;
console.log('myNumber:', myNumber);
console.log("тип змінної myNumber:", typeof myNumber);
// const promptNumber = prompt("ведіть число");
// console.log('promtNumber:', promptNumber);
// console.log("тип змінної promptNumber:", typeof promptNumber);
//  const newPromptNumber = Number(promptNumber);
// console.log('newPromptNumber:', newPromptNumber);
// console.log("тип змінної newPromptNumber:", typeof newPromptNumber);

// lesson3
console.log("lesson-3");
console.log(36);
console.log(true);
console.log(false);
console.log(null);
console.log(undefined);

console.log('typeof "lesson-3":', typeof "lesson-3");
console.log(typeof 36);
console.log(typeof true);
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);

const a = 5;
const b = 7;
let c;
c = a + b;
console.log('a + b =', c);
console.log('a - b =', a - b ); 
console.log(' b / a =', b / a );
console.log(' b * a =', b * a );

// lesson4
console.log("lesson 4")
let toNumber1 = 5;
let toNumber = Number("5px");
console.log('Number("5px"):', toNumber);
console.log("typeof toNumber:", typeof toNumber);

console.log('Number("5" * 2):', Number("5" * 2));
const d = "5" * 2;
console.log('"5" * 2:', d);

console.log('Number("5" + 2):', Number("5" + 2));

const e = "5" + 2;
console.log('"5" + 2:', e );

const e1 = 5 + 2;
console.log('5 + 2:', e1 );

const f = "5" - 2;
console.log('"5" - 2:', f );
const g = "5" / 2;
console.log('"5" / 2:', g );

const h = "6";
const j = 5;
console.log(`h: ${h}, j: ${j}`);
console.log('h:', h , ",", "j:", j);
console.log('h > j:', h > j);
console.log('h < j:', h < j);
console.log('h <= j:', h <= j);
console.log('h >= j:', h >= j);

console.log('parseInt("5"):', parseInt("5"));
console.log('Number("5"):', Number("5"));

console.log('parseInt("5px"):', parseInt("5px"));
console.log('Number("5px"):', Number("5px"));

console.log('parseInt("=5px"):', parseInt("=5px"));

console.log('parseInt("5m2sm"):', parseInt("5m2sm"));

console.log('parseInt("5.5"):', parseInt("5.5"));

console.log('parseFloat("5.5"):', parseFloat("5.5"));

console.log('parseFloat("5.px"):', parseFloat("5.px"));

console.log('Number("5.5"):', Number("5.5"));
console.log('Number("5.5px"):', Number("5.5px"));

console.log('Number.parseFloat("12.46qwe79"):', Number.parseFloat("12.46qwe79"));

console.log('36 + "Привiт!":', 36 + "Привiт!");
console.log('isNaN(36 + "Привiт!"):', isNaN(36 + "Привiт!"));
console.log('isNaN(36):', isNaN(36));
console.log('isNaN("36"):', isNaN("36"));

//! Перевірка на NaN - метод Number.isNaN(val)
console.log('Number.isNaN("qwerty"):', Number.isNaN("qwerty"));
console.log('Number.isNaN(36):', Number.isNaN(36));
console.log('Number.isNaN(NaN):', Number.isNaN(NaN));

let valueNaN = Number("63");
console.log('valueNaN = Number("qwerty"):', valueNaN); //! NaN
console.log('Number.isNaN(valueNaN):', Number.isNaN(valueNaN)); //! true
console.log('Number.isNaN(NaN):', Number.isNaN(NaN)); //! true

console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);
console.log("0.1 + 0.2 =", 0.1 + 0.2);

//? var. 1
//? Можна зробити їх цілими, помноживши кожне з них на число
//? N(10 або 100, в залежності від кількості знаків після коми),
//? скласти(додати) їх, а потім результат поділити також на N.
console.warn("Variant 1");
console.log("0.1 * 10 + 0.2 * 10 =", 0.1 * 10 + 0.2 * 10); //! 3
const result = (0.1 * 10 + 0.2 * 10) / 10;
console.log("(0.1 * 10 + 0.2 * 10) / 10 =", result); //! 0.3

//? var. 2
//! Метод число.toFixed(digits)
//? Cкласти(додати) числа, а результат скоротити до 
//? певного знаку після коми за допомогою методу toFixed().
console.warn("Variant 2");
console.log("(0.1 + 0.2).toFixed(1) =", (0.1 + 0.2).toFixed(1)); //! 0.3
console.log("(0.1 + 0.2).toFixed(17) =", (0.1 + 0.2).toFixed(17)); //! 0.3000000000000004
console.log("------------- Приклади toFixed(): ------------");
console.log("(5).toFixed(2) =", (5).toFixed(2));  //! 5.00
console.log("(8.762195).toFixed(4) =", (8.762195).toFixed(4));  //! 8.7622
console.log("8.762195.toFixed(4) =", 8.762195.toFixed(4));  //! 8.7622
console.log("----------------------------------------------");
// lesson5
console.log("lesson5");
const course1 = "JavaScript"; 
console.log("course1:", course1); //! JavaScript

const course2 = 'JavaScript';
console.log("course2:", course2); //! JavaScript

const course3 = `JavaScript`;
console.log("course3:", course3); //! JavaScript
//! Конкатенація рядків
const myMessage = "Mango " + "is " + "happy";
console.log('("Mango " + "is " + "happy"):', myMessage); //! "Mango is happy"

const myAge2 = 24;
const newMessage = "Poly is " + myAge2 + " years old!";
console.log('("Poly is " + age + " years old!"):', newMessage); //! "Poly is 24 years old!"

console.log("'Mango' + 55:", 'Mango' + 55); //! "Mango55"
console.log("'Mango' + true:", 'Mango' + true); //! "Mangotrue"
console.log("---------------------------------------------------------");
console.log("50 + 55:", 50 + 55); //! "Mango55"
console.log("'50' + 55:", '50' + 55); //! "Mango55"
console.log("'Mango' + true:", 'Mango' + true); //! "Mangotrue"
console.log("false + true:", false + true); //! "Mangotrue"
console.log("---------------------------------------------------------");
console.log("1 + '2':", 1 + '2'); //! "12"
console.log("1 + '2' + 4:", 1 + '2' + 4); //! "124"
console.log("1 + 2 + '4':", 1 + 2 + '4'); //! "34"

//! ЯВНЕ - вбудована функція (або функція-конструктор) -> String(value)
//? Використовується для будь-яких перетворень.
//? Працює на будь-якому типі значень.
console.log(
    "%c ЯВНЕ приведення до рядка - String(value) ",
    "color: yellow; background-color: #2274A5",
);
console.log("String(5):", String(5)); //! "5"
console.log("String('5'):", String('5')); //! "5"
console.log("String(true):", String(true)); //! "true"
console.log("String(undefined):", String(undefined)); //! "undefined"
console.log("String(null):", String(null)); //! "null"
console.log("String(NaN):", String(NaN)); //! "NaN"

//! ЯВНЕ - метод .toString()
//? Використовується для об'єктів або примітивів.
//? Якщо застосовується до null або undefined, 
//? викличе помилку(TypeError).
//? Надає більше контролю над перетворенням 
//? деяких об'єктів (наприклад, Array, Object).
console.log(
    "%c ЯВНЕ приведення до рядка - .toString() ",
    "color: yellow; background-color: #2274A5",
);
console.log("(5).toString():", (5).toString()); //! "5"
console.log("('5').toString():", ('5').toString()); //! "5"
console.log("(true).toString:", (true).toString()); //! "true"
// console.log("(undefined).toString:", (undefined).toString()); //! Cannot read properties of undefined (reading 'toString')
console.error(`(undefined).toString: Cannot read properties of undefined (reading 'toString')`);
// console.log("(null).toString:", (null).toString()); //! Cannot read properties of null (reading 'toString')
console.error(`(null).toString: Cannot read properties of null (reading 'toString')`)
console.log("(NaN).toString:", (NaN).toString()); //! "NaN"

//? НЕЯВНЕ - автоматично під час виконання операцій або обчислень
console.log(
    "%c НЕЯВНЕ приведення до рядка - Конкатенація(+) ",
    "color: yellow; background-color: #2274A5",
);
console.log("'5' + 3:", '5' + 3); //! "53"
console.log("3 + '5':", 3 + '5'); //! "35"
console.log("'5' + true:", '5' + true); //! "5true"
console.log("'5' + undefined:", '5' + undefined); //! "5undefined"
console.log("5 + undefined:", 5 + undefined); //! NaN
console.log("'5' + null:", '5' + null); //! "5null"
console.log("5 + null:", 5 + null); //! 5
console.log("null + undefined:", null + undefined); //! NaN
console.log("undefined + undefined:", undefined + undefined); //! NaN
console.log("null + null:", null + null); //! 0
console.log("null + true:", null + true); //! 1
console.log("null + false:", null + false); //! 0
console.log("-----------------------------------");




