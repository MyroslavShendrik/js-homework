//! Перебирання об'єкта
//? ✳️ На відміну від масиву або рядка,
//? об'єкт - це неітерабельна сутність,
//? тобто його не можна перебрати циклами
//? for або for...of.

//! Цикл for...in
//? ✴️ Для перебирання об'єктів використовується
//? спеціальний цикл for...in,
//? який перебирає КЛЮЧІ об'єкта object.
console.warn("Приклад-1:");
const object = {
    0: 2,
    1: 21,
    2: 34,
    thirt: 89,
    4: 144
};
console.log("object:", object);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");
console.log(object.thirt)
// for (const key of object) {
//     console.log(key); //! ❌ TypeError: object is not iterable
// };

for (const key in object) {
    console.log(`${key}: ${object[key]}`); //! ✅
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Змінна key доступна тільки в тілі циклу.
//? На кожній ітерації в неї буде записано
//? значення ключа (ім'я) властивості.
//? Для того, щоб отримати значення властивості
//? з таким ключем (ім'ям),
//? використовується синтаксис квадратних дужок.
console.warn("Приклад-21:");
const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
};
console.log("book:", book);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

for (const key in book) {
    //todo: var.1:
    //! Ключ
    console.log("key:", key);
    //! Значення властивості з таким ключем
    // console.log("this:", this); //! undefined
    console.log("book[key]:", book[key]);
    console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");
    
    //todo: var.2:
    // console.log(`${key}: ${book[key]}`);
};
console.log("--------------------------------------------------------------------------------------------------");

//! Методи об'єкта Object
//? ✳️ Всі об'єкти походять від конструктора Object.
//? У нього є кілька дуже корисних методів для роботи з об'єктами.

//! Додавання методу (методів) -> Object.assign
console.warn("Object.assign - додавання методу (методів):");
//? ✴️ Object.assign - додає один
//? або декілька методів до об'єкту.
const bookShelf = {
    books: ["The Last Kingdom"],
    //todo: Ці ТРИ методи будуть додані окремо як var.1 або var.2
    getBooks() {
        return this.books;
    },
    addBook(bookName) {
        this.books.push(bookName);
    },
    removeBook(bookName) {
        const bookIndex = this.books.indexOf(bookName);
        this.books.splice(bookIndex, 1);
    },
};
console.log("books_before:", bookShelf);;
// bookShelf.addBook("Гаррі Потер")
// console.log(bookShelf.getBooks());

//todo: 🛑 var.1
// //todo: Додавання до об'єкту метода "getBooks":
// bookShelf.getBooks = function() {
//     return this.books;
// };

// // //todo: Додавання до об'єкту метода "addBook":
// bookShelf.addBook = function(bookName) {
//     this.books.push(bookName);
// };

// // //todo: Додавання до об'єкту метода "removeBook":
// bookShelf.removeBook = function(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
// };
// console.log("🛑books_after-1:", bookShelf);

//todo: ✅ var.2 Додавання до об'єкту методів "getBooks", "addBook" і "removeBook":
Object.assign(bookShelf, {
    getBooks() {
        return this.books;
    },
    addBook(bookName) {
        this.books.push(bookName);
    },
    removeBook(bookName) {
        const bookIndex = this.books.indexOf(bookName);
        this.books.splice(bookIndex, 1);
    },
});
console.log("✅books_after-2:", bookShelf);

console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log("books_add:", bookShelf.getBooks()); //! ['The Last Kingdom', 'The Mist', 'Dream Guardian']

bookShelf.removeBook("The Mist");
console.log("books_remove:", bookShelf.getBooks()); //! ['The Last Kingdom', 'Dream Guardian']
console.log("------------------------------------------------------------------------------------------------");
