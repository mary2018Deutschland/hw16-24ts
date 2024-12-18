// Задание 1
// Обработка цепочки промисов с `async/await`
// Создайте несколько функций, которые
// возвращают промисы с разным временем выполнения.
// Напишите функцию, которая вызывает эти промисы поочерёдно,
//  используя `await`, и обрабатывает результаты каждой операции.
// Убедитесь, что цепочка промисов выполняется последовательно.

function taskOne() {
  return new Promise((res) => {
    setTimeout(() => {
      res("1 task");
    }, 1000);
  });
}
function taskTwo() {
  return new Promise((res) => {
    setTimeout(() => {
      res("2 task");
    }, 2000);
  });
}
function taskThree() {
  return new Promise((res) => {
    setTimeout(() => {
      res("3 task");
    }, 3000);
  });
}

async function alternatelyCall() {
  const result1 = await taskOne();
  console.log(result1);
  const result2 = await taskTwo();
  console.log(result2);
  const result3 = await taskThree();
  console.log(result3);
  // console.log(result1);
  // console.log(result2);
  // console.log(result3);
}

// alternatelyCall();

// Задание 2
// Асинхронная обработка данных из массива
// Напишите функцию, которая принимает массив строк.
// Каждая строка будет асинхронно обрабатываться
// (например, преобразовываться в верхний регистр с задержкой).
// Используйте `Promise.all` для выполнения всех операций параллельно и вывода всех результатов.

async function upperCaseOfStringArrayAsync(arr: string[]) {
  const promisesArray: Promise<string>[] = [];
  for (const item of arr) {
    const result = await new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(item.toUpperCase());
      }, 1000);
    });
    promisesArray.push(Promise.resolve(result));
  }
  console.log(promisesArray);
  return Promise.all(promisesArray);
}

const arrayTest = ["Vanja", "Mascha", "Olya"];
// upperCaseOfStringArrayAsync(arrayTest);

// Задание 3
// Обработка ошибки в параллельных промисах
// Напишите функцию, которая вызывает три промиса параллельно с помощью `Promise.all`.
// Один из промисов должен намеренно завершиться с ошибкой через `reject`.
// Обработайте эту ошибку с использованием `try/catch` и выведите соответствующее сообщение.

async function promisesCall() {
  try {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("result1");
      }, 1000);
    });

    const result2 = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("result2");
      }, 2000);
    });

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("result3");
      }, 3000);
    });

    const results = await Promise.all([result, result2, result3]);
    console.log(results);
  } catch (error) {
    console.error("Error by PromisesProcessing: ", error);
  }
}
// promisesCall();

// Задание 4 Асинхронная функция с динамическим временем выполнения
// Напишите асинхронную функцию, которая принимает массив чисел.
// Для каждого числа создайте промис, который будет завершаться через
// количество миллисекунд, равное значению числа.
// Используйте `Promise.all` для ожидания завершения
// всех промисов и вывода результатов в консоль.

async function dynamicExecution(arr: number[]) {
  const promises: Promise<number>[] = [];

  for (const item of arr) {
    const result = await new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(item);
      }, item);
    });
    console.log(result);
    promises.push(Promise.resolve(result));
  }
  console.log(promises);
  return Promise.all(promises);
}

const arrayForTest = [2000, 4000, 6000];
dynamicExecution(arrayForTest);
