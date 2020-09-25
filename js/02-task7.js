/* Створення нового масиву на основі відбору із вихідного масиву
Напиши функцію filterArray(array), яка приймає 1 параметр array - масив. Функція перевіряє кожне значення
масиву - чи є значення скінченним числом (Number.isFinite). Для перевірки використовуй цикл for.
Числа додаються в новий масив numbers за допомогою методу push, а не числа - ігноруються.
Після завершення перевірки масиву array повертається масив numbers. */

function filterArray(array) {
  'use strict';
  const numbers = [];

  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    if (Number.isFinite(array[i])) {
      numbers.push(array[i]);
    }
  }

  return numbers;
}

console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

console.log(filterArray([1, NaN, Infinity]));
// [1]

console.log(filterArray([0, -0, 100, '100']));
// [0, 0, 100]

console.log(filterArray([undefined, false, null, [], 1]));
// [1]

console.log(filterArray([{}, () => {}, 2]));
// [2]
