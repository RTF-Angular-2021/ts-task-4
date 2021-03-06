/** Задача 3
 * Ниже приведён код, перепишите его, используя async/await вместо .then/.catch
*/

interface IUser {
    name: string;
    id: number;
}

class HttpError extends Error {
    public response: Response;

    constructor(response: Response) {
        super(`${response.status} for ${response.url}`);
        this.response = response;
    }
}

function req(url: string): Promise<IUser> {
    return fetch(url)
        .then((response: Response) => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new HttpError(response);
            }
        })
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
function getGitHub() {
    let name = prompt("Введите логин на GitHub?", "");

    return req(`https://api.github.com/users/${name}`)
        .then(user => {
            document.write(`Полное имя: ${user.name}, уникальный номер: ${user.id}.`);
            return user;
        })
        .catch(err => {
            if (err instanceof HttpError && err.response.status == 404) {
                document.write("Такого пользователя не существует.");
            } else {
                throw err;
            }
        });
}

getGitHub();
