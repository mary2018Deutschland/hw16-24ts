// Задание 3 Вложенные пространства имен для управления пользователями
// Создайте файл `userManagement.ts`, в котором определите
// пространство имен `UserManagement`.
// Внутри него создайте вложенное пространство
// имен `Admin`. Внутри `Admin` создайте класс
// `AdminUser`, который будет иметь свойства для имени, email и прав доступа (например, `isSuperAdmin`).
// Также создайте методы для изменения прав доступа.
// Используйте этот класс в файле `main.ts` для создания администратора и изменения его прав.

namespace UserManagement {
  export namespace Admin {
    export class AdminUser {
      name: string;
      email: string;
      isSuperAdmin: boolean;

      constructor(name: string, email: string, isSuperAdmin: boolean) {
        this.name = name;
        this.email = email;
        this.isSuperAdmin = isSuperAdmin;
      }

      changeAccess(access: boolean): void {
        this.isSuperAdmin = access;
        console.log(
          `${this.isSuperAdmin ? "Доступ разрешен" : "Доступ закрыт"}`
        );
      }
    }
  }
}

export default UserManagement;
