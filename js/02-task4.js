/* Форматування рядка в залежності від довжини рядка
Напиши функцію formatString(string, maxLength = 40), яка приймає рядок і форматує його якщо необхідно.

- Якщо довжина рядка не перевищує maxLength, функція повертає її в початковому вигляді.
- Якщо довжина більша maxLength, то функція обрізає рядок до разміру maxLength символів і додає
в кінець рядка три крапки ..., після чого повертає укорочену версію. */

function formatString(string, maxLength = 40) {
  // Write code under this line
  if (string.length > maxLength) {
    string = string.slice(0, maxLength) + '...';
  }

  return string;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'
