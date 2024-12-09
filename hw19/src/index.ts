// Задание 1
// Напишите стрелочную функцию`sumEvenNumbers`, которая принимает
// массив чисел и возвращает сумму всех четных чисел.
const sumEvenNumbers = (arr: number[]): number => {
  return arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
};
const numbers = [11, 13, 12, 15, 24];
console.log(sumEvenNumbers(numbers));
// Задание 2
// Определите интерфейс StringToBooleanFunction для функции,
//   которая принимает строку и возвращает`boolean`(например,
//   проверяет, является ли строка пустой).Реализуйте такую функцию.

interface IStringToBooleanFunction {
  (str: string): boolean;
}
const stringToBooleanFunction: IStringToBooleanFunction = (str) => {
  return str ? true : false;
};

console.log(stringToBooleanFunction("Hello world"));
// Задание 3
// Создайте тип CompareStrings для функции, принимающей две строки
// и возвращающей`boolean`(например, для проверки равенства строк).
// Напишите функцию, соответствующую этому типу.

type CompareStrings = {
  (arg1: string, arg2: string): boolean;
};
const compareStrings: CompareStrings = (arg1, arg2) => {
  return typeof arg1 === typeof arg2;
};
// Задание 4
// Напишите обобщенную функцию`getLastElement`, которая принимает
// массив любого типа и возвращает последний элемент этого массива.

interface IGetLastElement {
  <T>(array: T[]): T | undefined;
}

const getLastElement: IGetLastElement = (array) => {
  return array.length > 0 ? array[array.length - 1] : undefined;
};
console.log(getLastElement([2, 6, 8]));
// Задание 5
// Создайте обобщенную функцию`make Triple`, которая принимает
// три аргумента одного типа и возвращает массив из этих трёх
// элементов.

interface IMakeTriple {
  <T>(arg1: T, arg2: T, arg3: T): [T, T, T];
}

const makeTriple: IMakeTriple = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
};
console.log(makeTriple("lESIA", "OLYA", "KIRILL"));
