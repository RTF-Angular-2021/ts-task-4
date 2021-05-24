/** Задача 2
 * Необходимо реализовать асинхронную подгрузку модулей в браузере:
 * 1) Разнести классы SettingValue, Setting и Example по разным *.ts файлам
 * 2) После компиляции TypeScript должно получаться 3 файла формата *.js.
 * 3) Создать index.html, в котором необходимо указать ссылку на первый JavaScript файл,
 * 	  все остальные файлы должны подгрузиться асинхронно по цепочке, используя requireJS.
*/

import { Example } from './example';
import { Setting } from './setting';
import { SettingValue } from './setting-value';

class Test {
    public print(a: string, b: number): string {
        return `${a} and ${b}`;
    }
}

let test = new Test();
const example = new Example(new Setting("test", new SettingValue("test", "test")));
example.id = 5;
example.title = "test";
console.log(test.print(example.title, example.id));