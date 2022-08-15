/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

/*
0. Убрать все пробельные символы в начале и конце строки. Как это сделать?
1. str -> array (массив)
2. Перебераем каждое слово в массиве,
    -берем первую букву в слове,
    - делаем ее заглавной
    - сохраням в перемен.
    - добавляем остаток строки
    - добавить полученную строку в результирующий массив
3. Преобразовать результ. массив в строку и вернуть
 */

function capitalize(str) {

    const words = str.split(' ');
    const wordsFilter = words.filter(function (item){
        return item !== ''
    })

    const result = wordsFilter.map(function (word){
        return word[0].toUpperCase() + word.slice(1)
    });

    return result.join(' ');

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize(' '));
console.log(capitalize(' молодость всё простит'));