/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 *
 * 
 *  fizzBuzz(15) -> 1 2 fizz 4 buzz fizz buzz ... fizzbuzz
 * 
*/

function checkFizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
         return 'fizzbuzz'
    } else if (num % 5 === 0){
        return 'buzz'
    } else if (num % 3 === 0){
        return 'fizz'
    }
     return num
}

function fizzBuzz(num) {
    /*
    1. Создать последовательность чисел от 1 до num
    2. Проверить числа от 1 до num при помощи ф-ции checkFizzBuzz
    */
   for(let i = 1; i <= num; i++){
       const value = checkFizzBuzz(i);
       console.log(value)
   }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

fizzBuzz(15);
