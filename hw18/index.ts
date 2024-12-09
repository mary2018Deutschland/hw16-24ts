// Задание 1
// Объединение и пересечение типов
// Создайте два типа: `Admin` и `User`.
// Тип `Admin` должен включать поля `name` (строка) и `permissions`
// (массив строк), а тип `User` должен включать поля `name` (строка)
//  и `email` (строка).
// Создайте тип `AdminUser`, который объединяет
// свойства обоих типов, и создайте объект этого типа.

type Admin = {
  name: string;
  permission: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const AdminUser1: AdminUser = {
  name: "Maxim",
  permission: ["admin", "vip"],
  email: "max@ukr.net",
};

// Задание 2
// Вложенные объекты и опциональные поля
// Создайте объект `Car` с полями `make` (строка), `model`
// (строка), и вложенным объектом `engine`, который имеет поля
//  `type` (строка) и `horsepower` (число).
// Добавьте опциональное поле `year` (число) для года выпуска машины.
// Напишите функцию, которая выводит информацию о машине.

interface ICar {
  make: string;
  model: string;
  engine: {
    type: string;
    horsepower: number;
  };
  year?: number;
}

const car: ICar = {
  make: "AUDI",
  model: "Q2",
  engine: {
    type: "disel",
    horsepower: 100,
  },
  year: 2020,
};

function printCarInfo(car: ICar): void {
  console.log(
    `ICar \n make: ${car.make}, model: ${car.model}, engine: ${car.engine.type}, horsepower: ${car.engine.horsepower}`
  );
}
printCarInfo(car);

// Задание 3
// Интерфейс для функции с объектом
// Создайте интерфейс для функции `calculateDiscount`,
//  которая принимает объект `Product` с полями `name`
//   (строка) и `price` (число), а также параметр `discount` (число).
// Функция должна возвращать новую цену продукта с учетом скидки.

type Product = {
  name: string;
  price: number;
};

interface ICalculateDiscount {
  (product: Product, discount: number): number;
}
const calculateDiscount: ICalculateDiscount = (product, discount) => {
  if (product.name === "Audi")
    return product.price - product.price * (discount / 100);
  return product.price;
};

const product1: Product = {
  name: "Ford",
  price: 10000,
};

const product2: Product = {
  name: "Audi",
  price: 40000,
};

const discountedPriceFord = calculateDiscount(product1, 10);
const discountedPriceAudi = calculateDiscount(product2, 50);

console.log(discountedPriceFord);
console.log(discountedPriceAudi);

// Задание 4
// Массив объектов и функции
// Создайте интерфейс`Employee`, который включает поля`name`
//   (строка) и`salary`(число).
// Создайте массив объектов`Employee`, затем напишите функцию,
//   которая принимает этот массив и возвращает массив зарплат всех сотрудников.

interface IEmploee {
  position: string;
  name: string;
  salary: number;
}
interface IGetSalary {
  (emp_s: IEmploee[]): string;
}
const AllEmploee: IEmploee[] = [
  { position: "boss", name: "Alex", salary: 1200 },
  { position: "hr", name: "Alice", salary: 1000 },
  { position: "asistent", name: "Oleg", salary: 800 },
];

const getEmploeeSalary: IGetSalary = (emp_s) => {
  return emp_s.map((emp) => `${emp.name}: ${emp.salary}`).join(" , ");
};

console.log(getEmploeeSalary(AllEmploee));

// Задание 5
// Наследование интерфейсов и работа с объектами
// Создайте интерфейс Person с полями firstName (строка) и lastName (строка).
// Создайте интерфейс`Student`, который наследует Person и добавляет
// поле`grade`(число).
// Создайте объект student этого типа и напишите функцию, которая выводит
// полное имя студента и его оценку.

interface IPerson {
  firstName: string;
  lastName: string;
}

interface IStudent extends IPerson {
  grade: number;
}
interface IGetStudent {
  (st: IStudent): string;
}
const student: IStudent = {
  firstName: "Jurij",
  lastName: "Ivanov",
  grade: 100,
};

const printStudent: IGetStudent = (st) => {
  return `Student Full Name: ${st.firstName} ${st.lastName} \nGrade: ${st.grade}`;
};
console.log(printStudent(student));
// Задание 6
// Интерфейс для функции с несколькими параметрами
// Создайте интерфейс для функции`concatStrings`, которая принимает
// два параметра: str1 и`str2`(оба строки) и возвращает их объединение.
// Реализуйте эту функцию и протестируйте её.

interface IConcatStrings {
  (str1: string, str2: string): string;
}
const concatStrings: IConcatStrings = (str1, str2) => {
  return `${str1}-${str2}`;
};

console.log(concatStrings("Tutti", "Frutti"));
