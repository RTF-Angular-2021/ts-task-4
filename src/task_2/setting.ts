import {SettingValue} from './setting_val';

class Setting {
    public key: string;
    public value: SettingValue;
 
    constructor(k: string, ov: SettingValue) {
        this.key = k;
        this.value = ov;
    }
}

export {SettingValue, Setting};
