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

async function req(url: string): Promise<IUser> {
    let response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function getGitHub() {
    let name = prompt("Введите логин на GitHub?", "");
    let result = req(`https://api.github.com/users/${name}`);
    if (await result) {
        document.write(`Полное имя: ${(await result).name}, уникальный номер: ${(await result).id}.`);
        return result;
    }
    if (result instanceof HttpError && result.response.status == 404) {
        document.write("Такого пользователя не существует.");
    }

}

getGitHub();
