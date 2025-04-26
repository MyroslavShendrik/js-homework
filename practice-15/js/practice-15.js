//! Імперативний код
//? ✴️ Описує процес обчислення у вигляді
//? заданої послідовності інструкцій,
//? що змінюють стан програми.
//? Опис того, як щось виконується.
//? ✳️ Імперативний стиль програмування - це такий стиль,
//? що надає машині набір детальних інструкцій для виконання задачі.
//? Наприклад, цикл for, який надає точні вказівки
//? для ітерації по індексам масиву.
//? ✳️ Можна провести аналогію з рецептом приготування страви. 
//? Рецепт - це набір покрокових інструкцій 
//? для отримання бажаного результату.
console.warn(`Приклад «Імперативного коду»: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_14/images/imperative-programming-example.jpg"}`);

//todo: Приклади Імперативного коду
console.warn("Приклад-1. Імперативний код:");
const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
};
console.log("book:", book);

//todo: Приклад-1. Імперативний код:
console.log(
    `%c
                                                             
        const title = "The Last Kingdom";                    
        const author = "Bernard Cornwell";                   
        const genres = ["historical prose", "adventure"];    
        const isPublic = true;                               
        const rating = 8.38;                                 
                                                             `,
    'color: #ffff60; background-color: #ff7272',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


console.warn("Приклад-2. Імперативний код:");
//todo: Приклад-2. Імперативний код:
//? Напиши скрипт підрахунку вартості гравіювання прикрас.
//? Для цього створи функцію
//? calculateEngravingPrice(message, pricePerWord)
//? приймаючу рядок (в рядку будуть тільки слова і прогалини)
//? і ціну гравіювання одного слова,
//? і повертає ціну гравіювання всіх слів в рядку.
console.log(
    `%c
                                                                      
        function calculateEngravingPrice(message, pricePerWord) {     
                                                                      
            let words = 0;                                            
            let inWord = false;                                       
                                                                      
            for (const character of message.trim()) {                 
                if (character !== ' ' && !inWord) {                   
                    words++;                                          
                    inWord = true;                                    
                } else if (character === ' ') {                       
                    inWord = false;                                   
                };                                                    
            };                                                        
                                                                      
            return words * pricePerWord;                              
        };                                                            
                                                                      `,
    'color: #ffff60; background-color: #00c1cf',
);

function calculateEngravingPrice(message, pricePerWord) {

    let words = 0;
    let inWord = false;

    for (const character of message) {
        if (character !== ' ' && !inWord) {
            words++;
            inWord = true;
        } else if (character === ' ') {
            inWord = false;
        };
    };

    return words * pricePerWord;
};


console.log("Price:", calculateEngravingPrice("Той, хто задоволений самим собою – багач", 10)); //! 70
console.log("-----------------------------------------------------------------------------------------------------------");


//! Декларативний код
//? ✴️ Описує те, що ми хочемо отримати у підсумку,
//? а не спосіб це зробити.
//? Порядок виконання і спосіб досягнення - неважливі.
//? ✳️ Коли ми пишемо HTML-код, то декларативно,
//? за допомогою тегів та атрибутів, описуємо те,
//? що хочемо отримати у підсумку.
//? Браузер читає цей код і сам виконує всі необхідні операції
//? для створення HTML-елементів і розміщення їх на сторінці.
//? ✳️ Можна провести аналогію з меню ресторану.
//? Це декларативний набір страв, які можна замовити,
//? подробиці приготування і подачі яких приховані.
console.warn(`Приклад «Декларативного коду»: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_14/images/declarative-programming-example.jpg"}`);

//todo: Приклади Декларативного коду
console.warn("Приклад-1. Декларативний код:");
console.log(
    `%c
                                                                            
    const { title, author, genres, isPublic, rating, coverImage } = book;   
                                                                            `,
    'color: #21ff21; background-color: #ff7272',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


console.warn("Приклад-2. Декларативний код:");
//todo: Приклад-2. Декларативний код:
console.log(
    `%c
                                                                      
        function calculateEngravingPrice(message, pricePerWord) {     
            return message.split(" ").length * pricePerWord;          
        };                                                            
                                                                      `,
    'color: #9bff9b; background-color: #00c1cf',
);

function calculateEngravingPrice2(message, pricePerWord) {
    return message.split(" ").length * pricePerWord;
};
console.log("Price:", calculateEngravingPrice2("Той, хто задоволений самим собою – багач", 10)); //! 70
console.log("-----------------------------------------------------------------------------------------------------------");

//! Функція з побічними ефектами
console.warn("Функція з побічними ефектами:")
//? ✴️ Функція з побічними ефектами - це функція,
//? яка в процесі виконання може змінювати
//? або використовувати глобальні змінні,
//? змінювати значення аргументів посилального типу,
//? виконувати операції введення-виведення тощо.
//? ✳️ Функція dirtyMultiply(array, value) множить 
//? кожен елемент масиву array на число value. 
//? Вона змінює (мутує) вихідний масив за посиланням.
const dirtyMultiply = (array, value) => {
    for (let i = 0; i < array.length; i += 1) {
        array[i] = array[i] * value;
    };
};

const numbers = [1, 2, 3, 4, 5];
console.log("numbers_before:", numbers); //! [1, 2, 3, 4, 5]

dirtyMultiply(numbers, 2);

//todo: Відбулася мутація вихідних даних - масиву numbers:
console.log("numbers_after:", numbers); //! [2, 4, 6, 8, 10]
console.log(". . . . . . . . . . . . . . . . . . . .");



//! Чиста функція
console.warn("Чиста функція:");
//? ✴️ Чиста функція (pure function) - це функція,
//? результат якої залежить тільки від
//? значень переданих аргументів.
//? За умови однакових аргументів вона
//? завжди повертає один і той самий результат
//? і не має побічних ефектів,
//? тобто не змінює значення аргументів.
//? ✳️ Напишемо реалізацію чистої функції 
//? множення елементів масиву, 
//? що повертає новий масив, не змінюючи вихідний.
const pureMultiply = (array, value) => {
    const newArray1 = [];
    const newArray2 = [];

    //todo: var.1
    for (let i = 0; i < array.length; i += 1) {
        newArray1.push(array[i] * value);
    };

    //todo: var.2
    array.forEach(element => {
        newArray2.push(element * value);
    });

    // return newArray1;
    // return newArray2;
    return {
        newArray1,
        newArray2
    };
};

const numbers2 = [1, 2, 3, 4, 5];
console.log("numbers2_before:", numbers2); //! [1, 2, 3, 4, 5]

const doubledNumbers = pureMultiply(numbers2, 2);

//todo: Мутація вихідних даних - масиву numbers2 не відбулася:
console.log("numbers2_after:", numbers2); //! [1, 2, 3, 4, 5]

//todo: Функція повернула новий масив зі зміненими даними:
console.log("doubledNumbers:", doubledNumbers); //! [2, 4, 6, 8, 10]
console.log("---------------------------------------");
