/* Функція предикат
Функція предикат повертає true або false

Напиши функцію checkForSpam(message), яка приймає 1 параметр message - рядок. Функція перевіряє його
на вміст слів spam и sale. Якщо знайшли заборонене слово, то функція повертає true,
якщо заборонених слів немає, функція повертає false. Слова в рядку можуть бути в довільному регістрі. */

function checkForSpam(str) {
  ('use strict');
  // Write code under this line

  //   const normalizedStr = str.toLowerCase();
  //   return normalizedStr.includes('spam') || normalizedStr.includes('sale');

  return (
    str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')
  );
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
