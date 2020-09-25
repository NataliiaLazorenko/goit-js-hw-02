/* Пошук найдовшого слова у рядку з пробілами
Напиши функцію findLongestWord(string = ""), яка приймає параметром довільний рядок
(в рядку будуть тільки слова і пробіли) і повертає найдовше слово в цьому рядку. */

function findLongestWord(string = '') {
  // Write code under this line

  const array = string.split(' ');
  let longestWord = array[0];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
