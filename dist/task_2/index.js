define(["require", "exports", "../lib/Example", "../lib/Setting", "../lib/SettingValue"], function (require, exports, Example_1, Setting_1, SettingValue_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Explain = /** @class */ (function () {
        function Explain(prop) {
            this.prop = prop;
        }
        Explain.prototype.sum = function (a) {
            return this.prop + a;
        };
        return Explain;
    }());
    var Ex = new Example_1.Example(new Setting_1.Setting("1", new SettingValue_1.SettingValue("gtp", "fr")));
    var num = new Explain(2);
    num.sum(5);
});
//# sourceMappingURL=index.js.map