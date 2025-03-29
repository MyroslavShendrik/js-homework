//! Предикатні функції
//todo: Предика́т (лат. praedicatum «заявлене, згадане, сказане»)
//todo: - це твердження, висловлене про суб'єкт.
//? Функції-предикати (або функції-питання)
//? відповідають на якесь запитання
//? і завжди (без винятків!) повертають або true або false.
//? У JavaScript предикати зазвичай починаються
//? з префікса is, has або can,
//? але не обмежені цими словами.
//? Приклади:
//todo: isInfant() — «чи це немовля?»
//todo: hasChildren() — «чи є діти?»
//todo: isEmpty() — «чи порожній?»
//todo: hasErrors() — «чи є помилки?»


console.warn("Що таке Предикатна функція. Приклад:");
//todo: Функція-предикат isInfant відповідає на питання:
//todo: «чи це немовля?» та повертає true або false
const isInfant = function (age) {
    //todo: var.1
    // if (age <= 1) {
    //     return true;
    // } else {
    //     return false;
    // };
    //todo: var.2
    return (age <= 1);
};
console.log("isInfant(1):", isInfant(1)); //! true
console.log("isInfant(3):", isInfant(3)); //! false
console.log("--------------------------------------------");


//! Приклад-алгоритм приготування кави за допомогою функції "Приготування кави"
console.warn("Приклад функції \"Приготування кави\":");
let groundCoffee;
let hotWater;
let coffee;

//! 1 - функція "Приготування меленої кави"
function makesGroundCoffee() {
    groundCoffee = "30 грам";
    console.log("1️⃣ Мелена кава є?", Boolean(groundCoffee));
    console.log(groundCoffee);
    return groundCoffee;
};

//! 2 - функція "Приготування окропу (гарячої води)".
function makesHotWater() {
    // hotWater = "250 мілілітрів";
    console.log("2️⃣ Окріп (гаряча вода) є?", Boolean(hotWater));
    return hotWater;
};

//! 3 - функція "Приготування кави"
function makingCoffee() {
    if (!(makesGroundCoffee())) {
        return "Потрібна мелена кава!";
        
    };

    if (!(makesHotWater())) {
        return "Потрібна гаряча вода!";
    };

    coffee = groundCoffee + hotWater;
    coffee = "✅ Кава готова!"
    return coffee;
};

console.log(makingCoffee());
console.log("--------------------------------------------");

//! Виклик функції або передача посилання на функцію
//? Функції не відрізняються від чисел, рядків або масивів
//? - це просто спеціальний тип даних (об'єкт вищого порядку),
//? значення, яке можна зберігати у змінній
//? або передавати у якості аргументу в іншу функцію.
const greet1 = function(name) {
    return `Ласкаво просимо ${name}.`;
};
const greet2 = 4;
console.warn("Виклик функції:");
//? Викликаємо функцію greet1 і виводимо результат у консоль
console.log(greet1("Манго")); //! 'Ласкаво просимо Манго'.

console.warn("Передача посилання на функцію:");
//? Виводимо функцію greet1 у консоль, не викликаючи її.
//? Передається посилання на функцію,
//? а не результат виклику (відсутні круглі дужки),
//? тому в консоль виводиться її тіло.
//? Це означає, що функцію можна присвоїти у змінну
//? або передати як аргумент іншої функції.
console.log(greet1); //! ƒ greet1() { return `Ласкаво просимо ${name}.`; }
console.log(greet2); //! 4 
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//! Колбек-функції
console.warn("Колбек-функції:");
//? Функція зворотного виклику (callback, колбек)
//? - це функція, яка передається іншій функції
//? як аргумент, а та, в свою чергу, викликає передану функцію.

//? Функція вищого порядку (higher order function)
//? - функція, яка приймає у якості параметрів
//? інші функції або повертає функцію у якості результату.

//todo: Приклад створення та використання Колбек-функції:
//? У виклику функції registerGuest
//? ми передали посилання на функцію greet як аргумент,
//? тому вона буде присвоєна в параметр callback
//? і викликана всередині функції registerGuest
//? за допомогою круглих дужок - callback(guesName). 
//? Ім'я параметра для колбека може бути довільним, 
//? головне пам'ятати, що значенням буде функція.
//todo: Колбек-функція:
function greetUkr(name) {
    console.log(`Global -> Ласкаво просимо ${name}.`);
};
function greetEn(name) {
    console.log(`Global -> Wellcome ${name}.`);
};
//todo: Функція вищого порядку:
function registerGuest(guesName, callback) {
    console.log(`Реєструємо гостя ${guesName}.`);
    //todo: var.1
    // greetEn(guesName);
    // function greet(name) {
    //     console.log(`function registerGuest -> Ласкаво просимо ${name}.`);
    // };
    
    //todo: var.2
    callback(guesName); 
};

//todo: var.1 (виклик з використанням виклику іншої функції в середині функції)
// registerGuest("Манго"); //! 'Реєструємо гостя Манго.'  'Ласкаво просимо Манго.'
//todo: var.2 (виклик з використанням Колбек-функції)
registerGuest("Манго", greetUkr); //! 'Реєструємо гостя Манго.'  'Ласкаво просимо Манго.'
registerGuest("Манго", greetEn);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . .");
