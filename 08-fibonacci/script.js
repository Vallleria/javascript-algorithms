/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 *                                       pps ps
 *                                     n: 0  1  2  3  4  5  6   7   8   9  ... n
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 *                                             ppS pS
 *      2 = 0 + 1
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    /*
        1. Если n = 0, то мы вернем 0
        2. Если n = 1, то мы вернем 1
        3. Если n = 2, то вернем 1                                             <- prevPrevSum = 1
        4. Если n = 3, то нам надо взять значения из п.2 и п.3 и вернуть сумму <- prevSum = 2
        5. Если n = 4, то нам надо взять значения из п.4 и п.3 и вернуть сумму <- result = prevSum + prevPrevSum
     */

    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    let prevPrevSum = 0; // n = 0
    let prevSum = 1;     // n = 1
    let result = 0;

    for (let i = 1; i < n; i++) {
        result = prevPrevSum + prevSum;

        prevPrevSum = prevSum;
        prevSum = result;

    }
    return result;


}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(6));


//console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)