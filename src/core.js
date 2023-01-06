//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    // return ((n ^ 0) === n);
    return (~~n == n);
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let num = 1;
    let i = 0;
    let arr = [];

    while (num < 21) {
      if (!(num%2)){
        arr[i]=num;
        i++;
      }
      num++;
    }
    return (arr);
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let i = 0;
    let sum = 0;

    while(i < (n+1)){
        sum+=i;
        i++;
    }
    return (sum);
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n === 0) {
        return 0;
      }
    res = n + recSumTo(n-1);
    return (res);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n === 0 || (n === 1)) {
        return 1;
      }
    res = n * factorial(n - 1);
    return (res);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return (n > 0 && (n & (n - 1)) == 0);
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let x = 1;
    let y = 1;
    let i = 2;

    while (i < n){
        i++;
        y = x + y;
        x = y - x;
    }

    return (y);
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */

function getOperationFn (initialValue, operatorFn) {
    
    if (operatorFn){
        return (a) => initialValue = operatorFn(initialValue,a);
    }

    else {
        return () => initialValue;
    }
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */

function sequence (start=0, step=1) {
    start-=step; //для первого эл-та
    function generator(){
        start+=step;
        return start;
    }
    return (generator);
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp итп) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
 function deepEqual(firstObject, secondObject) {

    //проверка на ссылки (если не объект, то на равенство) и на Nan
    if (firstObject === secondObject ||(firstObject !== firstObject && secondObject !== secondObject)) {
        return true;
    }

    if (firstObject === null || typeof firstObject != 'object' ||
        secondObject === null || typeof secondObject != 'object') {
        return false;
    }

    const firstObjectKeysAmount = Object.keys(firstObject).length;
    const secondObjectKeysAmount = Object.keys(secondObject).length;

    if(firstObjectKeysAmount == secondObjectKeysAmount){
        for (let property in firstObject) {
            if ( !(property in secondObject) || !deepEqual(firstObject[property], secondObject[property])) {
                return false;
            }
        }
        return true;
    }
    return false;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};