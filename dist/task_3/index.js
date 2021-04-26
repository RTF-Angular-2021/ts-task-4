/** Задача 3
 * Ниже приведён код, перепишите его, используя async/await вместо .then/.catch
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(response) {
        var _this = _super.call(this, response.status + " for " + response.url) || this;
        _this.response = response;
        return _this;
    }
    return HttpError;
}(Error));
function req(url) {
    return fetch(url)
        .then(function (response) {
        if (response.status == 200) {
            return response.json();
        }
        else {
            throw new HttpError(response);
        }
    });
}
// Запрашивать логин, пока github не вернёт существующего пользователя.
function getGitHub() {
    var name = prompt("Введите логин на GitHub?", "");
    return req("https://api.github.com/users/" + name)
        .then(function (user) {
        document.write("\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F: " + user.name + ", \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: " + user.id + ".");
        return user;
    })
        .catch(function (err) {
        if (err instanceof HttpError && err.response.status == 404) {
            document.write("Такого пользователя не существует.");
        }
        else {
            throw err;
        }
    });
}
getGitHub();
//# sourceMappingURL=index.js.map