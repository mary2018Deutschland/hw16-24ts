// Задание 1
// Типизация функции с несколькими параметрами
// Напишите функцию calculateTotal, которая принимает три параметра:
// price (число)
// quantity (число)
// discount (число, по умолчанию равен 0)
// Функция должна возвращать общую стоимость товаров с учетом скидки.
// Если скидка не указана, она считается равной нулю.

interface CalculateTotal {
  (price: number, quantity: number, discount?: number): number;
}

const calculateTotal: CalculateTotal = (price, quantity, discount = 0) => {
  return price * quantity * (1 - discount / 100);
};
console.log(calculateTotal(100, 1, 10));
//рез-т 90

// Задание 2
// Использование Union типов
// Создайте переменную id, которая может быть либо строкой, либо числом.
// Напишите функцию`displayId`, которая принимает эту переменную и выводит
// сообщение, содержащее значение ID.Если id — строка, выведите её в верхнем
// регистре.Если id — число, умножьте его на 10 перед выводом.

type id = string | number;

const displayId = (id: id): string | number => {
  if (typeof id === "number") return id * 10;
  return id.toUpperCase();
};
console.log(displayId(10));
console.log(displayId("Mary2"));

//рез-т 100 или MARY2

// Задание 3
// Объявление и типизация массивов объектов
// Создайте массив объектов`orders`, где каждый объект описывает заказ
// и содержит следующие свойства:
// orderId (строка)
// amount (число)
// status (строка, может принимать значения "pending", "shipped" или "delivered")
// Напишите функцию`filterOrdersByStatus`, которая принимает этот массив и строку
//   status, и возвращает массив заказов, соответствующих указанному статусу.
type Status = "pending" | "shipped" | "delivered";

interface Order {
  orderId: string;
  amount: number;
  status: Status;
}
const orders: Order[] = [
  { orderId: "1", amount: 10, status: "pending" },
  { orderId: "2", amount: 15, status: "shipped" },
  { orderId: "3", amount: 30, status: "delivered" },
  { orderId: "4", amount: 45, status: "pending" },
];
const filterOrdersByStatus = (orders: Order[], status: Status): Order[] => {
  return orders.filter((order) => order.status === status);
};
const shippedOrders = filterOrdersByStatus(orders, "shipped");
console.log(shippedOrders);
//рез-т [ { orderId: '2', amount: 15, status: 'shipped' } ]

// Задание 4
// Работа с кортежами и объектами
// Создайте кортеж productInfo, который содержит:
// название товара (строка)
// его цену (число)
// количество на складе (число)
// Напишите функцию`updateStock`, которая принимает объект`inventory`
//   (где ключ — это название товара, а значение — количество на складе)
//   и кортеж`productInfo`, обновляет количество товара в объекте`inventory`
//   и возвращает обновленный объект.

let productInfo: [title: string, price: number, quantity: number] = [
  "MacBook Pro 16-inch",
  2499.99,
  20,
];

function updateStock(
  inventory: { [title: string]: number },
  productInfo: [title: string, price: number, quantity: number]
): { [title: string]: number } {
  inventory[productInfo[0]] = productInfo[2];
  return inventory;
}
console.log(updateStock({ "MacBook Pro 16-inch": 12 }, productInfo));
