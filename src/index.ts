// Создать простое Express-приложение с маршрутами GET и POST, используя TypeScript
// Инициализация проекта
// Создайте новую папку проекта и откройте её в текстовом редакторе или IDE.
// Инициализируйте проект с помощью npm.
// Установка TypeScript и других зависимостей
// Установите TypeScript как зависимость разработки: выполните команду `npm install typescript --save-dev`.
// Установите необходимые типы для Express: `npm install @types/express --save-dev`.
// Установите Express и ts-node для выполнения TypeScript кода: выполните команду `npm install express ts-node`.
// Создайте файл `tsconfig.json`, который будет управлять настройками компиляции TypeScript. Чтобы сгенерировать его автоматически, выполните команду `npx tsc --init`.
// Настройка TypeScript
// Откройте файл `tsconfig.json` и убедитесь, что включены следующие настройки:
// `"target": "ES6"` для поддержки современных возможностей JavaScript.
// `"module": "commonjs"` для использования стандартов модулей Node.js.
// `"rootDir": "./src"` и `"outDir": "./dist"` для указания мест хранения исходных и скомпилированных файлов.
// `"strict": true` для строгой проверки типов.
// `"esModuleInterop": true` для корректной работы импортов

// Создание файлов проекта
// Создайте папку `src`, где будут находиться исходные файлы TypeScript.
// Внутри папки `src` создайте файл `index.ts`, который будет содержать код вашего Express-приложения.
// Создание Express-приложения
// Инициализируйте Express приложение в файле `index.ts`. Для этого потребуется импортировать модуль Express и создать экземпляр приложения.
// Настройте маршруты GET и POST:

// GET-маршрут должен обрабатывать запросы по определенному пути (например, `/`) и возвращать простой текстовый ответ.
// POST-маршрут должен принимать данные из тела запроса и возвращать ответ с полученными данными.
// Запуск и проверка
// В `package.json` добавьте новый скрипт для запуска приложения с использованием `ts-node`. Например, в разделе `"scripts"` добавьте строку `"start": "ts-node src/index.ts"`.
// Запустите приложение командой `npm start`.
// Проверьте работу маршрутов GET и POST, отправив запросы через браузер или инструменты вроде Postman.
// Заключительные шаги
// Убедитесь, что все зависимости работают корректно и приложение не содержит ошибок.

import express, { Application, request, Request, Response } from "express";
import "dotenv/config";

const app: Application = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

app.post("/", (req: Request, res: Response) => {
  const { name }: { name: string } = req.body;
  res.json({ name });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
