/*
 * Задача 6: «Уникальные числа»
 *
 * Напишите функцию uniq(arr), принимающую на вход массив целых чисел.
 * Функция должна возвращать массив уникальных чисел, которые содержатся
 * в переданном массиве. То есть, дубликаты должны быть удалены.
 * 
*/

/*
    1. Перебираем arr эл-т за эл-том
       Если число уже встречалось, то мы его пропускаем
       Иначе добавляем в результирующий массив и добавляем в массив чисел, который содержит числа которые мы встретили
 */
function uniq(arr) {
    const resultNumber = [];
    const filterNumber = []; // массив с числами, которые уже встретились

    arr.forEach(function (number){
        if(!filterNumber.includes(number)){
            resultNumber.push(number);
            filterNumber.push(number);
        }
    })
    return resultNumber
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(uniq([1, 2, 5, 4, 2])); // [1, 2, 5, 4]
console.log(uniq([3, 3, 3, 5])); // [3, 5]
console.log(uniq([1, 4, 2, 2, 3, 4, 8])); // [1, 4, 2, 3, 8]