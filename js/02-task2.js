/* Розрахунок вартості гравіювання прикрас
Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію
calculateEngravingPrice(message = "", pricePerWord = 0), що приймає рядок (в рядку будуть
тільки слова і пробіли) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

Для вирішення цієї задачі не використовуйте цикли. Тобто ніяких for, while, do while, for of, for in, forEach
або функціональних методів. */

const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
  message.split(' ').length * pricePerWord; // Write code in this line

// const calculateEngravingPrice = function (message = '', pricePerWord = 0) {
//   const text = message.split(' ');
//   const totalPrice = text.length * pricePerWord;
//   return totalPrice;
// };

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120

console.log(calculateEngravingPrice('Uno', 100)); // 100
