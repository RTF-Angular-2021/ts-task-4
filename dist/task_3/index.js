/** Задача 3
 * Ниже приведён код, перепишите его, используя async/await вместо .then/.catch
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.response = response;
    }
}
function req(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
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
    return __awaiter(this, void 0, void 0, function* () {
        let name = prompt("Введите логин на GitHub?", "");
        let user;
        try {
            user = yield req(`https://api.github.com/users/${name}`);
            document.write(`Полное имя: ${user.name}, уникальный номер: ${user.id}.`);
            return user;
        }
        catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                document.write("Такого пользователя не существует.");
            }
            else {
                throw err;
            }
        }
    });
}
getGitHub();
//# sourceMappingURL=index.js.map