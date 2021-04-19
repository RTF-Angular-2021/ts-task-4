/** Задача 2
 * Необходимо реализовать асинхронную подгрузку модулей в браузере:
 * 1) Разнести классы SettingValue, Setting и Example по разным *.ts файлам
 * 2) После компиляции TypeScript должно получаться 3 файла формата *.js.
 * 3) Создать index.html, в котором необходимо указать ссылку на первый JavaScript файл,
 * 	  все остальные файлы должны подгрузиться асинхронно по цепочке, используя requireJS.
*/

class SettingValue {
    public property1: string;
    public property2: string;
 
    constructor(p1: string, p2: string) {
        this.property1 = p1;
        this.property2 = p2;
    }
}
 
class Setting {
    public key: string;
    public value: SettingValue;
 
    constructor(k: string, ov: SettingValue) {
        this.key = k;
        this.value = ov;
    }
}
 
 
class Example {
    public title: string;
    public id: number;
    private _setting: Setting;
 
    constructor(s: Setting) {
        this._setting = s;
    }
}
