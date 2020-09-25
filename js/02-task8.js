/* Обчислення суми масиву
Напиши функцію reduceArray(array), яка приймає числовий масив array. Якщо масив array не порожній, необхідно
порахувати суму всіх елементів масиву, використовуючи цикл for. Для підрахунку суми використовуй змінну
total. Функція повинна повертати 0 якщо масив порожній і значення total у протилежному випадку. */

function reduceArray(array) {
  'use strict';
  let total = 0;

  // Write code under this line
  if (array.length !== 0) {
    for (const value of array) {
      total += value;
    }
  }

  return total;
}

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5
