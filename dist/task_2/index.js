/** Задача 2
 * Необходимо реализовать асинхронную подгрузку модулей в браузере:
 * 1) Разнести классы SettingValue, Setting и Example по разным *.ts файлам
 * 2) После компиляции TypeScript должно получаться 3 файла формата *.js.
 * 3) Создать index.html, в котором необходимо указать ссылку на первый JavaScript файл,
 * 	  все остальные файлы должны подгрузиться асинхронно по цепочке, используя requireJS.
*/
define(["require", "exports", "./example", "./setting", "./setting-value"], function (require, exports, example_1, setting_1, setting_value_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Test {
        print(a, b) {
            return `${a} and ${b}`;
        }
    }
    let test = new Test();
    const example = new example_1.Example(new setting_1.Setting("test", new setting_value_1.SettingValue("test", "test")));
    example.id = 5;
    example.title = "test";
    console.log(test.print(example.title, example.id));
});
//# sourceMappingURL=index.js.map