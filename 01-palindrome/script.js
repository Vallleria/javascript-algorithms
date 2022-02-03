/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 * 
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 * 
*/

// function palindrome(str) {
//     // Напишите код здесь
//     for(let i= 0; i < str.length; i++){
//         const left = str[i].toUpperCase();
//         const right = str[(str.length - 1) - i].toUpperCase();
  
//         if (left !== right) {
//              return false;
//         }
//     }
//     return true;

// }
function palindrome(str) {
    const result = str.toUpperCase() === str.split("").reverse().join("").toUpperCase();
    return result
}

    //  Обратный перебор

    
    /*
    1. Понять условия задачи (вникнуть в суть задания). Понять о чем идет речь.
    2. Разобрать примеры
    3. Понять, что мы получаем на входе в функциюя и на выходе (какие данные)
    4. Своими словами (+ можно написать псевдокод) описываешь решение задачи.
       По сути рассказ того, как ты будешь решать задачу пошагово.
    5. Записать решение в код
    6. Выполнить проверку на примерах из задания
    *7. Выполнить проверку с данными, которые не предусмотрены

    Решение своими словами:
      Если в процессе чтения строки слева направо и справа налево символы совподают,
       то вернем true
      В противном случае false

      1. Как прочитать каждый символ в строке?
      2. Как прочиать каждый символ в строчке в обратном порядке?
      3. Как реализовать проверку в цикле при чтении символов?
      4. Как сравнить символы без учета регистра?

    // декларативное решение
      1. Берем исходную строку
      2. Берем обратную из исходной строки
      3. Сравнить исходную с обратной
    */


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false

/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 * 
 * palindrome('О, лета тело!'); // true
 * 
*/