
//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити масив з трьох чисел.
//? Змінити значення другого елемента масиву на 10.
//! Код виконаного завдання
const arr1 = [3, 6, 9];
console.log("arr1:", arr1);
arr1[1] = 10;
console.log("arr1:", arr1);
console.log("---------------------------------------------");



//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити масив із трьох рядків.
//? Додати до масиву ще одну рядків.
//! Код виконаного завдання
const arr2 = ["Рядок-1", "Рядок-2", "Рядок-3"];
console.log("arr2:", arr2);
// arr2[3] = "Рядок-4"; //todo: var.1
// arr2[arr2.length] = "Рядок-4"; //todo: var.2
arr2.push("Рядок-4"); //todo: var.3
console.log("arr2:", arr2);
console.log("---------------------------------------------");



//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити скрипт який поверне суму всіх чисел в масиві.
//! Код виконаного завдання
const arr3 = [1, 2, 3, 4, 5];
console.log("arr3:", arr3);
let total = 0;
//todo: var.1 (for)
// for (let item of arr3) {
//     total += item;
// };

//todo: var.2 (reduce)
total = arr3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("total:", total);
console.log("---------------------------------------------");



//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити масив з 5-ти чисел. 
//? Вивести на екран всі елементи масиву 
//? за допомогою циклу for.
//! Код виконаного завдання
const arr4 = [8, 13, 21, 34, 55];
console.log("arr4:", arr4);
for (let i = 0; i < arr4.length; i += 1) {
    console.log(`arr4[${i}] :`, arr4[i]);
};
console.log("---------------------------------------------");



//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити масив із 5-ти рядків.
//? Вивести на екран кожен рядок з масиву,
//? який містить більше 5-ти символів.
//! Код виконаного завдання
const arr5 = ["first", "second", "third", "fourth", "fifth"];
console.log("arr5:", arr5);
//todo: var.1
for (let i = 0; i < arr5.length; i += 1) {
    if (arr5[i].length <= 5) {
        continue;
    };
    console.log(`var.1 -> arr5[${i}] має більше 5-ти символів:`, arr5[i]);
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");

//todo: var.2
for (let i = 0; i < arr5.length; i += 1) {
    if (arr5[i].length > 5) {
        console.log(`var.2 -> arr5[${i}] має більше 5-ти символів:`, arr5[i]);
    };
    
};
console.log("---------------------------------------------");



//todo [6]
console.log(
    "%c [6] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити масив з 10-ти чисел. 
//? Знайти та вивести на екран 
//? максимальне значення з масиву.
//! Код виконаного завдання
const arr6 = [5, 89, 55, 2, 3, 144, 34, 8, 21, 13];
console.log("arr6:", arr6);
let biggestNum;
//todo: var.1 (for)
// biggestNum = arr6[0];
// for (let i = 0; i < arr6.length; i += 1) {
//     if (arr6[i] > biggestNum) {
//         biggestNum = arr6[i];
//     };
// };

//todo: var.2 (Math.max)
biggestNum = Math.max(...arr6); 

console.log("Найбільше число, <biggestNum>:", biggestNum);
console.log("---------------------------------------------");


    //todo [7]
    console.log(
        "%c [7] ",
        "color: yellow; background-color: #2274A5",
    );
    //? Створити масив з 10-ти чисел. 
    //? Знайти всі парні числа в масиві 
    //? та вивести їх на екран.
    //! Код виконаного завдання
    const arr7 = [2, 21, 34, 89, 144, 377, 610, 1597, 2584, 6765];
    console.log("arr7:", arr7);
    let totalNum = 0;
    for (const item of arr7) {
        if (item % 2 === 0) {
            console.log(`Число ${item} парне`);
            totalNum += item;
        };
    };
    console.log("Сума всіх парних чисел =", totalNum);
    console.log("---------------------------------------------");
