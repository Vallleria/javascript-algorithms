/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

/*
    1. Преобразуем str -> array
    2. Перебираем массив букв
       - сравниваем каждую букву с буквами из массива с гласными буквами vovels
         Если буква совподает с буквой из массива с vovels, то увеличиваем счетчик гласных на 1
    3. Вернуть счетчик гласных

 */

const vovels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е']

function findVowels(str) {
    const letterArray = str.split('');
    let counterVovels = 0;
    letterArray.forEach(function (letter){
        const letterRegister = letter.toLowerCase()
        if(vovels.includes(letterRegister)) {
            counterVovels++
        }
    });
    return counterVovels;
}


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3