// Задание 1  Абстрактный класс Animal
// Создайте абстрактный класс `Animal` с абстрактным методом `makeSound()`.
// Затем создайте классы `Dog` и `Cat`, которые наследуют `Animal`
// и реализуют метод `makeSound()` по-своему
// (`Dog` должен возвращать "Bark", а `Cat` — "Meow").
// Создайте массив типа `Animal[]`, включающий объекты `Dog` и
//`Cat`, и вызовите метод `makeSound()` для каждого элемента массива.

abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow");
  }
}

const dog = new Dog();
const cat = new Cat();

const animals: Animal[] = [dog, cat];

animals.forEach((animal) => {
  animal.makeSound();
});

// Задание 2 Абстрактный класс Shape с цветом
// Создайте абстрактный класс `ColoredShape`, который наследует
//`Shape` (из задания 4 на уроке) и добавляет абстрактное поле `color`.
// Реализуйте классы `ColoredCircle` и `ColoredRectangle`,
// которые наследуют `ColoredShape`, задают `color` и реализуют метод `calculateArea()`.
// Выведите площадь и цвет для каждого объекта.

abstract class Shape {
  abstract name: string;
  abstract calculateArea(): string;
}

abstract class ColoredShape extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShape {
  name: string = "Circle";
  radius: number;
  color: string;
  constructor(radius: number, color: string) {
    super();
    this.radius = radius;
    this.color = color;
  }
  calculateArea(): string {
    return `CircleArea: ${Math.PI * Math.pow(this.radius, 2)},CircleColor: ${
      this.color
    } `;
  }
}

class ColoredRectangle extends ColoredShape {
  name: string = "Rectangle";
  width: number;
  height: number;
  color: string;
  constructor(width: number, height: number, color: string) {
    super();
    this.width = width;
    this.height = height;
    this.color = color;
  }
  calculateArea(): string {
    return `RectangleArea: ${this.width * this.height},RectangleColor: ${
      this.color
    } `;
  }
}
const shape1 = new ColoredCircle(2, "red");
const shape2 = new ColoredRectangle(3, 5, "blue");
console.log(shape2.calculateArea());
// Задание 3
// Абстрактный класс Appliance
// Создайте абстрактный класс `Appliance` с абстрактными методами `turnOn()` и `turnOff()`.
// Затем создайте классы `WashingMachine` и `Refrigerator`,
// которые наследуют `Appliance` и реализуют методы `turnOn()`
// и `turnOff()`, выводя соответствующие сообщения.
// Создайте массив типа `Appliance[]`, добавьте в него объекты
//`WashingMachine` и `Refrigerator`, и вызовите методы `turnOn()`
// и `turnOff()` для каждого элемента.

abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  turnOn() {
    console.log("WashingMachine is on");
  }
  turnOff() {
    console.log("WashingMachine is off");
  }
}

class Refrigerator extends Appliance {
  turnOn() {
    console.log("Refrigerator is on");
  }
  turnOff() {
    console.log("Refrigerator is off");
  }
}

const kitchen = [new WashingMachine(), new Refrigerator()];
kitchen.forEach((a) => {
  a.turnOn();
  a.turnOff();
});

// Задание 4  Абстрактный класс Account
// Создайте абстрактный класс `Account` с
// абстрактными методами `deposit(amount: number)`
// и `withdraw(amount: number)`.
// Реализуйте классы `SavingsAccount` и
//`CheckingAccount`, которые наследуют `Account`.
// В классе `SavingsAccount` добавьте логику для начисления процентов на остаток.
// В классе `CheckingAccount` реализуйте снятие средств с учетом комиссии.
// Проверьте работу методов на объектах обоих классов.

abstract class Account {
  protected balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
  private interestRate: number; // проценты

  constructor(initialBalance: number, interestRate: number) {
    super(initialBalance);
    this.interestRate = interestRate;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Сумма пополнения должна быть больше нуля");
      return;
    }
    this.balance += amount;
    console.log(
      `Пополнение счета на ${amount}. Текущий баланс: ${this.balance}`
    );
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("Сумма снятия должна быть больше нуля");
      return;
    }
    if (this.balance < amount) {
      console.log("Недостаточно средств для снятия");
      return;
    }
    this.balance -= amount;
    console.log(`Снятие ${amount}. Текущий баланс: ${this.balance}`);
  }

  applyInterest(): void {
    this.balance += (this.interestRate / 100) * this.balance;
    console.log(`Начислены проценты. Текущий баланс: ${this.balance}`);
  }
}

class CheckingAccount extends Account {
  private transactionFee: number;

  constructor(initialBalance: number, transactionFee: number) {
    super(initialBalance);
    this.transactionFee = transactionFee;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Сумма пополнения должна быть больше нуля");
      return;
    }
    this.balance += amount;
    console.log(
      `Пополнение счета на ${amount}. Текущий баланс: ${this.balance}`
    );
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("Сумма снятия должна быть больше нуля");
      return;
    }
    if (this.balance < amount + this.transactionFee) {
      console.log("Недостаточно средств для снятия");
      return;
    }
    this.balance -= amount + this.transactionFee;
    console.log(
      `Снятие ${amount} с комиссией ${this.transactionFee}. Текущий баланс: ${this.balance}`
    );
  }
}

const savingsAccount = new SavingsAccount(1000, 5); // Баланс 1000, процентная ставка 5%
savingsAccount.deposit(500); // Пополнение на 500
savingsAccount.applyInterest(); // Начисление процентов
savingsAccount.withdraw(200); // Снятие 200

const checkingAccount = new CheckingAccount(1000, 10); // Баланс 1000, комиссия 10
checkingAccount.deposit(300); // Пополнение на 300
checkingAccount.withdraw(200); // Снятие 200 с комиссией

// Задание 5
// Абстрактный класс Media
// Создайте абстрактный класс `Media` с абстрактным методом `play()`.
// Затем создайте классы `Audio` и `Video`, которые наследуют
//`Media` и реализуют метод `play()` по-своему (например, `Audio`
// выводит "Playing audio", а `Video` — "Playing video").
// Создайте массив типа `Media[]`, включающий объекты `Audio` и
//`Video`, и вызовите метод `play()` для каждого элемента массива.
abstract class Media {
  abstract play(): void;
}

class Audio1 extends Media {
  play() {
    console.log("Playing audio");
  }
}

class Video extends Media {
  play() {
    console.log("Playing video");
  }
}

const media: Media[] = [new Audio1(), new Video()];
media.forEach((a) => a.play());
