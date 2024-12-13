// Задание 4 Модули для работы с числовыми последовательностями
// Создайте файл `sequenceUtils.ts`, в котором определите функции:
// `generateFibonacci`, которая генерирует последовательность Фибоначчи до указанного числа.
// `generatePrimeNumbers`, которая генерирует простые числа до указанного числа.
// В файле `main.ts` импортируйте эти функции и протестируйте их на примерах.

export function generateFibonacci(n: number): number[] {
  if (n < 1) return [];
  const sequence = [0, 1];
  while (true) {
    const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (next > n) break;
    sequence.push(next);
  }
  return sequence;
}

export function generatePrimeNumbers(n: number): number[] {
  if (n < 2) return [];

  const primes = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}
