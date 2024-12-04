// Задание 1
// Функция приветствия
// Напишите функцию`greetUser`, которая принимает имя
// пользователя(строка) и выводит приветственное сообщение в
// консоль: "Привет, <name>!".Используйте строгую типизацию.

function greetUser(name: string): string {
  return `Hello ${name}`;
}

// Задание 2
// Типизация функции с объектом в качестве параметра
// Создайте интерфейс`Person`, который описывает человека
// с полями`name`, age, и`city`.
// Напишите функцию`printPersonInfo`, которая принимает
// объект типа Person и выводит информацию о человеке в
// формате: "Имя: <name>, Возраст: <age>, Город: <city>".

interface Person {
  name: string;
  age: number;
  city: string;
}
const user: Person = {
  name: "Mascha",
  age: 29,
  city: "Kiev",
};
function printPersonInfo(obj: Person): string {
  return `name ${obj.name},\n age ${obj.age},\n city ${obj.city}`;
}

const MaschaInfo = printPersonInfo(user);
console.log(MaschaInfo);

// Задание 3
// Простая типизация для числового параметра
// Напишите функцию`squareNumber`, которая принимает число
// и возвращает его квадрат.Используйте строгую типизацию.

function squareNumber(num: number): number {
  return num * num;
}

console.log(squareNumber(4));

// Задание 4
// Типизация функции с boolean
// Напишите функцию`isEven`, которая принимает число и
// возвращает`true`, если число четное, и`false`, если нечетное.
// Используйте строгую типизацию.

function isEven(num: number): boolean {
  if (num % 2 === 0) return true;

  return false;
}
const num1 = isEven(9);
console.log(num1);

// Задание 5
// Создание интерфейса для объекта
// Создайте интерфейс`Student`, который описывает студента
// с полями`name`(строка) и`grade`(число).
// Напишите функцию`printStudentInfo`, которая принимает
// объект типа Student и выводит информацию о студенте в
// формате: "Студент: <name>, Оценка: <grade>".

interface Student {
  name: string;
  grade: number;
}

const student1: Student = {
  name: "Oleg",
  grade: 100,
};

function printStudentInfo(obj: Student): string {
  return `Student: ${obj.name}, Note: ${obj.grade}`;
}

const studentOne = printStudentInfo(student1);
console.log(studentOne);

// Задание 6
// Функция с типом void
// Напишите функцию`logMessage`, которая принимает строку и
// выводит её в консоль без возвращаемого значения.Используйте тип`void`.

function logMessage(str: string): void {
  console.log(str);
}
console.log(logMessage("Mascha"));
