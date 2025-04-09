//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);


//? ✴️ Створіть об'єкт "weather" з трьома властивостями:
//? "temperature", "humidity", "windSpeed"  
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод,
//? який, використовуючи методи взаємодії з користувачем, 
//? отримує значення температури та повертає "true",
//? якщо температура нижче 0 градусів Цельсія, 
//? та "false", якщо температура вище або дорівнює 0 градусів Цельсія. 
//? ✳️ Якщо метод повернув "true" вивести повідомлення 
//? “Температура нижче 0 градусів Цельсія” і навпаки, 
//? дублюючи ці повідомлення  в консоль.
//! Код виконаного завдання
const weather = {
    temperature: -9,
    humidity: "80%",
    windSpeed: "2 м/с",

};
console.log("weather:", weather);
console.log("1️⃣ Temperature:", weather.temperature); //! -9
weather.isTemperatureBelowZero = function (newtempereture){
    console.log(newtempereture);
}
console.log("weather:", weather);
