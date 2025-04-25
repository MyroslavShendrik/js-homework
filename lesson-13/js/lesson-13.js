//todo [1]
console.log(
  "%c [1] ",
  "color: yellow; background-color: #2274A5",
);
//? Зроби деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const userA = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
//! Код виконаного завдання

const { name, age, hobby, premium } = userA;

console.log(name);     
console.log(age);     
console.log(hobby);  
console.log(premium);
console.log("-------------------------------------------------------------");



//todo [2]
console.log(
  "%c [2] ",
  "color: yellow; background-color: #2274A5",
);
//? Зроби деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const userB = { name1: 'Mango', age1: 2 };
//! Код виконаного завдання
const { name1, age1 } = userB;

console.log(name1); 
console.log(age1); 
console.log("-------------------------------------------------------------");



//todo [3]
console.log(
  "%c [3] ",
  "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const employeePerformance = {
  count: 11,
  employeePerformanceLists: [
      {
          ann: 29,
          david: 35,
          helen: 1,
          lorence: 99,
      },
      {
          poly: 12,
          mango: 17,
          ajax: 4,
      },
      {
          lux: 147,
          david: 21,
          kiwi: 19,
          chelsy: 38,
      }
  ],
};
//! Код виконаного завдання
const {
  count,
  employeePerformanceLists: [
    { ann, david: david1, helen, lorence },
    { poly, mango, ajax },
    { lux, david: david2, kiwi, chelsy }
  ]
} = employeePerformance;

console.log(count);
console.log(ann, david1, helen, lorence);
console.log(poly, mango, ajax);
console.log(lux, david2, kiwi, chelsy);
console.log("-------------------------------------------------------------");



//todo [4]
console.log(
  "%c [4] ",
  "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const employeeSalaries = {
  count: 6,
  employeeSalaryLists: [
      {
          mango: 100,
          poly: 150,
          alfred: 80,
      },
      {
          kiwi: 200,
          lux: 50,
          chelsy: 150,
      }
  ],
};
//! Код виконаного завдання
const {
  count: count1,
  employeeSalaryLists: [
    { mango: mango1, poly: poly1, alfred },
    { kiwi: kiwi1, lux: lux1, chelsy: chelsy1 }
  ]
} = employeeSalaries;

console.log(count1);
console.log(mango1);
console.log(poly1);
console.log(alfred);
console.log(kiwi1);
console.log(lux1);
console.log(chelsy1);


console.log("-------------------------------------------------------------");



//todo [5]
console.log(
  "%c [5] ",
  "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const products = [
  {
      name: 'Радар',
      price: 1300,
      quantity: 4
  },
  {
      name: 'Сканер',
      price: 2700,
      quantity: 3
  },
  {
      name: 'Дроїд',
      price: 400,
      quantity: 7
  },
  {
      name: 'Захоплення',
      price: 1200,
      quantity: 2
  },
];
//! Код виконаного завдання

console.log("-------------------------------------------------------------");



//todo [6]
console.log(
  "%c [6] ",
  "color: yellow; background-color: #2274A5",
);
//? ✴️ Напиши сценарій керування особистим кабінетом інтернет-банку.
//? Є об'єкт account в якому необхідно реалізувати методи 
//? для роботи з балансом та історією транзакцій.
//? ✳️ Типів транзацкій всього два.
//? Можна покласти або зняти гроші з рахунку.
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// //todo: Кожна транзакція - це об'єкт з властивостями: id, type і amount

// const account = {
//   //todo: Поточний баланс рахунку
//   balance: 0,
//   //todo:  Історія транзакцій
//   transactions: [],

//   //todo:  Метод створює і повертає об'єкт транзакції.
//   //todo:  Приймає суму і тип транзакції.
//   createTransaction(amount, type) { },

//   //todo:  Метод відповідає за додавання суми до балансу.
//   //todo:  Приймає суму танзакції.
//   //todo:  Викликає createTransaction для створення об'єкта транзакції
//   //todo:  після чого додає його в історію транзакцій
//   deposit(amount) { },
