//! Деструкткризація об'єктів
console.warn("Деструкткризація об'єктів:");
//? ✴️ Під час розробки програм дані приходять,
//? як правило, у вигляді масивів і об'єктів,
//? значення яких необхідно записати у локальні змінні.
//? Для того, щоб робити це максимально просто,
//? в сучасному стандарті існує
//? синтаксис деструктуризованого присвоювання.

//? ✳️ Складні дані завжди представлені об'єктом.
//? Багаторазові звернення до властивостей об'єкта
//? візуально забруднюють код, 
//? якщо потрібно отримати значення окремих змінних:
const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
};
console.log("book:", book);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const accessType1 = book.isPublic ? "публічному" : "закритому";
const message1 = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType1} доступі.`;
console.log("message1:", message1);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Якщо потрібно окремо отримати змінні
//? з такими ж назвами як власивості об'єкта
//? та їх значеннями, то можна просто створити їх:
// const title = "The Last Kingdom";
// const author = "Bernard Cornwell";
// const genres = ["historical prose", "adventure"];
// const isPublic = true;
// const rating = 8.38;

// console.log("title:", title);
// console.log("author:", author);
// console.log("genres:", genres);
// console.log("isPublic:", isPublic);
// console.log("rating:", rating);
// console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

// const accessType2 = isPublic ? "публічному" : "закритому";
// const message2 = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType2} доступі.`;
// console.log("message2:", message2);
// console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✴️ Для отримання змінних з такими ж назвами
//? як власивості об'єкта та їх значеннями,
//? використаємо синтаксис ❗️деструктуризованого присвоювання❗️. 
//? ✳️ Деструктуризація завжди знаходиться у лівій частині операції присвоєння. 
//? Змінним всередині фігурних дужок присвоюються значення властивостей об'єкта. 
//? Якщо ім'я змінної та ім'я властивості збігаються, відбувається присвоювання, 
//? в іншому випадку, їй буде присвоєно undefined. 
//? Порядок оголошення змінних у фігурних дужках - неважливий.
// const { title, author, genres, isPublic, rating, coverImage } = book;
// const {rating, coverImage,  author, genres, isPublic, title } = book;
// const { genres } = book;

// console.log("title:", title);
// console.log("author:", author);
// console.log("genres:", genres);
// console.log("isPublic:", isPublic);  
// console.log("rating:", rating);
// console.log("coverImage:", coverImage); //! undefined
// console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

// const accessType2 = isPublic ? "публічному" : "закритому";
// const message2 = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType2} доступі.`;
// console.log("message2:", message2);
console.log("----------------------------------------------------------------------------------------------------------------------");

//! Значення за замовчуванням
console.warn("Значення за замовчуванням:");
//? ✳️ Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
const book1 = {
    title1: "The Last Kingdom",
    author1: "Bernard Cornwell",
    genres1: ["historical prose", "adventure"],
    isPublic1: true,
    rating1: 8.38,
};
console.log("book1:", book1);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const {
    title1,
    author1,
    genres1,
    isPublic1,
    rating1,
    coverImage1 = "https://via.placeholder.com/640/480",
} = book1;

console.log("title1:", title1);
console.log("author1:", author1);
console.log("genres1:", genres1);
console.log("isPublic1:", isPublic1);
console.log("rating1:", rating1);
console.log("coverImage1:", coverImage1); //! "https://via.placeholder.com/640/480"
console.log("----------------------------------------------------------------------------------------------------------------------");

