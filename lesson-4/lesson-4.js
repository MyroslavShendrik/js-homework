//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Використовуючи метод взаємодії з користувачем 
//? для отимання даних з полем введення, 
//? отримайте від користувача за допомогою цих двох полів будь які дані
//? та перевірте, чи обидва поля містять значення.
//? Якщо так ✅, то виведіть повідомлення: "✅ Обидва поля заповнені, дякуємо.",
//? якщо ні ❌, то виведіть повідомлення: "❌ Не всі поля заповнені!☹️".
//? ⚠️ Додатково треба зробити такі перевіркі отиманих даних:
//? - на значення null,
//? - на пустий рядок "",
//? - на рядок в якому є лише пробіл(и)
//? та вивести відповідне повідомлення з помилкою, 
//? якщо введені дані не пройшли перевірку.
//! Код виконаного завдання
// const field1 = prompt("Введіть значення 1");
// const field2 = prompt("Введіть значення 2");
// console.log("field1:", field1);
// console.log("field2:", field2);
// if(field1 === null || field2 === null){
//     console.log("❌ Ви скасували введення");
//      alert("❌ Ви скасували введення");
// } else if(field1.trim() === "" || field2.trim() === ""){
//      console.log("❌ Ви ввели порожні значення☹️");
//       alert("❌ Ви ввели порожні значення☹️");
// } else if (field1 && field2) {
//     console.log("✅ Обидва поля заповнені, дякуємо.");
//     alert("✅ Обидва поля заповнені, дякуємо.");
// }
console.log("кінець завдання 1")

//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Використовуючи метод взаємодії з користувачем 
//? для отимання даних з полем введення, отримайте від користувача
//? за допомогою цих двох полів будь які ЧИСЛОВІ дані
//? та перевірте, чи сума цих двох ЧИСЕЛ більша за 10.
//? Якщо так ✅, то виведіть повідомлення: "✅ Сума більша за 10",
//? якщо ні ❌, то виведіть повідомлення: "❌ Сума менша або дорівнює 10".
//? ⚠️ Додатково треба зробити такі перевіркі отиманих даних:
//? - на значення null,
//? - на пустий рядок "",
//? - на рядок в якому є лише пробіл(и),
//? - на число
//? та вивести відповідне повідомлення з помилкою, 
//? якщо введені дані не пройшли перевірку.
//! Код виконаного завдання
//todo var.1
// const field3 = prompt("Введіть перше число");
// const field4 = prompt("Введіть друге число");
// console.log("field3:", field3);
//  console.log("field4:", field4);
//  console.log("isNan(field3):", isNaN(field4));
//  console.log("isNan(field4):", isNaN(field4));
// if(field3 === null || field4 === null){
//     console.log("❌ Ви скасували введення");
//      alert("❌ Ви скасували введення");
// } else if(field3.trim() === "" || field4.trim() === ""){
//      console.log("❌ Ви ввели порожні значення☹️");
//       alert("❌ Ви ввели порожні значення☹️");
// }  else if (isNaN(field3) || isNaN(field4)){
//     console.log("❌ Потрібно вводити числа!");
//     alert("❌ Потрібно вводити числа!");
// } else if (field3 && field4) {
//     console.log("✅ Ви ввели числа, дякуємо.");
//     alert("✅ Ви ввели числа, дякуємо.");
// }

//todo var.2
const field3 = prompt("Введіть перше число")?.trim();
const field4 = prompt("Введіть друге число")?.trim();
console.log("field3:", field3);
 console.log("field4:", field4);
 console.log("isNan(field3):", isNaN(field4));
 console.log("isNan(field4):", isNaN(field4));
if (field3 === undefined || field4 === undefined) {
    console.log("❌ Введення скасовано!");
    alert("❌ Введення скасовано!");
} else if (field3 === "" || field4 === "" || isNaN(field3) || isNaN(field4)) {
    console.log("❌ Потрібно вводити числа!");
    alert("❌ Потрібно вводити числа!");
}  else {
         console.log("✅ Ви ввели числа, дякуємо.");
         alert("✅ Ви ввели числа, дякуємо.");
         console.log("Number(field3):", Number(field3));
         console.log("Number(field4):", Number(field4));
         const num1 = Number(field3);
         const num2 = Number(field4);
         const sum = num1 + num2;
         if( sum > 10){
            console.log("✅ Сума більша за 10.");
            alert("✅ Сума більша за 10.");
         } else{
            console.log("❌ Сума менша або дорівнює 10.");
            alert("❌ Сума менша або дорівнює 10.");
         }
    
     } 

     
console.log("кінець завдання 2")
console.log("---------------------------------------------");



//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Використовуючи метод взаємодії з користувачем 
//? для отимання даних з полем введення, отримайте від користувача
//? за допомогою цього поля будь які дані у змінну <userText>
//? та перевірте, чи міститять отримані дані слово "JavaScript".
//? Якщо так ✅, то виведіть повідомлення: "✅ Текст <userText> містить слово JavaScript",
//? якщо ні ❌, то виведіть повідомлення: "❌Текст <userText> НЕ містить слово JavaScript".
//? ⚠️ Додатково треба зробити такі перевіркі отиманих даних:
//? - на значення null,
//? - на пустий рядок "",
//? - на рядок в якому є лише пробіл(и),
//? та вивести відповідне повідомлення з помилкою, 
//? якщо введені дані не пройшли перевірку.
//! Код виконаного завдання

console.log("---------------------------------------------");



//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Використовуючи метод взаємодії з користувачем 
//? для отимання даних з полем введення, отримайте від користувача
//? за допомогою цього поля будь яке ЧИСЛОВЕ значення - <number>
//? та перевірте, чи воно більше за 10 та менше за 20.
//? Якщо так ✅, то виведіть повідомлення: "✅ Число <number> входить в діапазон від 10 до 20",
//? якщо ні ❌, то виведіть повідомлення: "❌ Число <number> НЕ входить в діапазон від 10 до 20".
//? ⚠️ Додатково треба зробити такі перевіркі отриманого значення:
//? - на значення null,
//? - на пустий рядок "",
//? - на рядок в якому є лише пробіл(и),
//? - на число
//? та вивести відповідне повідомлення з помилкою, 
//? якщо введені дані не пройшли перевірку.
//! Код виконаного завдання

console.log("---------------------------------------------");


//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Використовуючи метод взаємодії з користувачем 
//? для отимання даних з полем введення, 
//? послідовно створити поля з веденням таких даних:
//?  - ім'я <name>,
//?  - електронна пошта <email>,
//?  - пароль <password>.
//? ⚠️ Введені дані повинні проходити перевірку на такі умови: 
//?  - ім'я <name> містить не менше 3 символів, 
//?  - електронна пошта <email> містить символ @ та крапку після неї, 
//?  - пароль <password> містить не менше 6 символів.
//? ❌ Якщо введені дані не пройшли ці перевірки 
//? треба вивести відповідні повідомлення з помилками(помилкою).
//? ⚠️ Додатково треба зробити такі перевіркі ВСІХ отриманих даних:
//? - на значення null,
//? - на пустий рядок "",
//? - на рядок в якому є лише пробіл(и),
//? - на число
//? ❌та вивести відповідне повідомлення з помилками(помилкою), 
//? якщо введені дані не пройшли ці перевірки.
//? ✅ Якщо введені дані пройшли ВСІ перевірки,
//? треба послідовно вивести в косоль значення цих даних.
let name;
let email;
let password;
//! Код виконаного завдання

console.log("---------------------------------------------");

