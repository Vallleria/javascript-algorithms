/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

/*
    0. Проверить длина str1 совпадает с str2
    1. Преобразуем str1 в массив str1Arr
    2. Перебираем каждую букву в str1Arr
       - Ищем вхождение каждой буквы в str2
         Если перебираемая буква letter из strArr отсутствует в str2, то сразу вернем false из ф-ции
 */

function anagram(str1, str2) {

    if(str1.length !== str2.length || str1.toUpperCase() === str2.toUpperCase()){
        return false
    }

    for(let i = 0; i < str1.length; i++) {
        const letter = str1[i].toUpperCase();
        if (!str2.toUpperCase().includes(letter)) {
            return false
        }
    }
      return true;
}



// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram("aba", "ba"));
console.log(anagram("up", "UP"));