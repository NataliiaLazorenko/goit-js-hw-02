/* Є масив logins з логінами користувачів. Напиши скрипт додавання логіна в масив logins.
Логін, який додається повинен:
- проходити перевірку на довжину від 4 до 16-ти символів включно
- бути унікальним, тобто бути відсутнім в масиві logins

Розбий завдання на підзадачі за допомогою функцій.
0. Перевірку на відсутність аргументів або на привильний тип аргументів робити не потрібно.
1. Напиши функцію isLoginValid(login), в якій перевір кількість символів параметра login і поверни true
або false в залежності від того, чи потрапляє довжина параметра в заданий діапазон від 4-х до 16-ти символів включно.
2. Напиши функцію isLoginUnique(allLogins, login), яка приймає список всіх логінів і логін, який додається,
як параметри і перевіряє наявність login в массиве allLogins, повертає true якщо такого логіна ще немає і false
якщо логін вже використовується.
3. Напиши функцію addLogin(allLogins, login) яка:
- Приймає новий логін і масив всіх логінів як параметри
- Перевіряє валідність логіна використовуючи допоміжну функцію isLoginValid
- Якщо логін не валідний, припинити виконання функції addLogin і повернути радок 'Помилка! Логін повинен бути
від 4 до 16 символів'
- Якщо логін валідний, функція addLogin перевіряє унікальність логіна за допомогою функції isLoginUnique
- Якщо isLoginUnique поверне false, тоді addLogin Не додає логін в массив масив і повертає рядок
'Такий логін уже використовується!'
- Якщо isLoginUnique поверне true, addLogin додає новий логін в logins і повертає рядок 'Логін успішно доданий!'

🔔 Принцип єдиної відповідальності функції - кожна функція робить щось одне. Це дозволяє перевикористати код
і змінювати логіку роботи функції тільки в одному місці, не зачіпаючи роботу програми в цілому.

Предикатні функції повертають тільки true або false. Такі функції прийнято називати починаючи з is:
isLoginUnique і isLoginValid в нашому випадку.
- isLoginUnique тільки перевіряє чи є такий логін в масиві і повертає true або false.
- isLoginValid тільки перевіряє чи валідний логін і повертає true або false.
- addLogin додають чи не додають логін в масив. При цьому для перевірок умови додавання використовує
результати викликів інших функцій - isLoginUnique і isLoginValid. */

function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  if (login.length >= min && login.length <= max) {
    return true;
  }

  return false;
}

function isLoginUnique(allLogins, login) {
  'use strict';
  // Write code under this line
  if (allLogins.includes(login)) {
    return false;
  }

  return true;
}

function addLogin(allLogins, login) {
  ('use strict');
  const SUCCESS = 'Логін успішно доданий!';
  const REFUSAL = 'Такий логін уже використовується!';
  const ERROR = 'Помилка! Логін повинен бути від 4 до 16 символів';
  let message;

  // if (isLoginUnique(allLogins, login) === false)
  if (!isLoginUnique(allLogins, login)) {
    return (message = REFUSAL);
  }

  // if (isLoginValid(login) === false)
  if (!isLoginValid(login)) {
    return (message = ERROR);
  }

  allLogins.push('Ajax');
  return (message = SUCCESS);
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax'));
// 'Логін успішно доданий!'

console.log(addLogin(logins, 'robotGoogles'));
// 'Такий логін уже використовується!'

console.log(addLogin(logins, 'Zod'));
// 'Помилка! Логін повинен бути від 4 до 16 символів'

console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Помилка! Логін повинен бути від 4 до 16 символів'
