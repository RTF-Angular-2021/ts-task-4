import {Example} from '../lib/Example';
import {Setting} from '../lib/Setting';
import {SettingValue} from '../lib/SettingValue';

class Explain {
    public prop:number;

    constructor(prop:number) {
        this.prop = prop;
    }

    public sum(a:number):number {
        return this.prop + a;
    }
}

let Ex = new Example(new Setting("1",new SettingValue("gtp","fr")))
let num = new Explain(2);
num.sum(5);