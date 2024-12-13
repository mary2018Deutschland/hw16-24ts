// Задание 2 Пространства имен для финансовых операций
// Создайте файл `finance.ts`, в котором определите пространство имен `Finance`.
// Внутри него создайте классы:
// `LoanCalculator`, который рассчитывает ежемесячные платежи по кредиту по формуле аннуитета.
// `TaxCalculator`, который рассчитывает налог на доход.
// Используйте эти классы в файле `main.ts` для расчета платежей по кредиту
// и налога на примерных данных.

namespace Finance {
  export class LoanCalculator {
    static calculateMonthlyPayment(
      principal: number, //Сумма кредита.
      annualRate: number, //Годовая процентная ставка (в десятичной форме, например, 0.05 для 5%).
      months: number
    ): number {
      const monthlyRate = annualRate / 12; // Перевод годовой ставки в месячную
      return (
        (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))
      );
    }
  }
  export class TaxCalculator {
    /**
     * Рассчитывает сумму налога.
     * @param income - Общий доход.
     * @param taxRate - Налоговая ставка (в десятичной форме, например, 0.2 для 20%).
     * @returns Рассчитанная сумма налога.
     */
    static calculateTax(income: number, taxRate: number): number {
      return income * taxRate;
    }
  }
}

export default Finance;
