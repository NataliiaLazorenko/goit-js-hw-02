/* Використання for
Напиши функцію getItemsString(array), яка отримує масив і повертає рядок, отриманий із об'єднання
(конкатенації) рядків у форматі ${номер елемента} - ${значення елемента}\n , де \n - спецсимвол переносу.

Нумерація повинна починатися з 1. Для прикладу, для першого елемента масиву ['Mango', 'Poly', 'Ajax']
з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

Використовуйте допоміжну змінну result для додавання (конкатенації) рядків всередині циклу for */

const getItemsString = function (array) {
  'use strict';
  // Write code under this line

  let result = '';
  for (let i = 0; i < array.length; i += 1) {
    result += `${i + 1} - ${array[i]}\n`;
  }
  return result;
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/
