// Задание 1 Модули для работы со строками
// Создайте файл `stringUtils.ts`, в котором определите функции:
// `capitalize`, которая делает первую букву строки заглавной.
// `reverseString`, которая переворачивает строку задом наперед.
// В файле `main.ts` импортируйте эти функции и протестируйте их на примерах строк.

// import { capitalize, reverseString } from "./stringUtils";

// console.log(capitalize("hello"));
// console.log(reverseString("hello"));

// Задание 2 Пространства имен для финансовых операций
// Создайте файл `finance.ts`, в котором определите пространство имен `Finance`.
// Внутри него создайте классы:
// `LoanCalculator`, который рассчитывает ежемесячные платежи по кредиту по формуле аннуитета.
// `TaxCalculator`, который рассчитывает налог на доход.
// Используйте эти классы в файле `main.ts` для расчета платежей по кредиту
// и налога на примерных данных.
// import Finance from "./finance";

// console.log(Finance.LoanCalculator.calculateMonthlyPayment(1000, 0.2, 10));
// console.log(Finance.TaxCalculator.calculateTax(1000, 0.2));
// Задание 3 Вложенные пространства имен для управления пользователями
// Создайте файл `userManagement.ts`, в котором определите
// пространство имен `UserManagement`.
// Внутри него создайте вложенное пространство
// имен `Admin`. Внутри `Admin` создайте класс
// `AdminUser`, который будет иметь свойства для имени, email и прав доступа (например, `isSuperAdmin`).
// Также создайте методы для изменения прав доступа.
// Используйте этот класс в файле `main.ts` для создания администратора и изменения его прав.

// import UserManagement from "./userManagement";

// const admin = new UserManagement.Admin.AdminUser(
//   "Mascha",
//   "cat@ukr.net",
//   false
// );
// console.log(admin);
// admin.changeAccess(true);
// console.log(admin);
// admin.changeAccess(false);
// console.log(admin);

// Задание 4 Модули для работы с числовыми последовательностями
// Создайте файл `sequenceUtils.ts`, в котором определите функции:
// `generateFibonacci`, которая генерирует последовательность Фибоначчи до указанного числа.
// `generatePrimeNumbers`, которая генерирует простые числа до указанного числа.
// В файле `main.ts` импортируйте эти функции и протестируйте их на примерах.

import { generateFibonacci, generatePrimeNumbers } from "./sequenceFibonacci";

console.log(generateFibonacci(8));
console.log(generatePrimeNumbers(8));
