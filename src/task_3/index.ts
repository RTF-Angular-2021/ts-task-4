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
    const res = await fetch(url);
    if(res.status === 200){
        return await res.json();
    }
    throw new HttpError(res)
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function getGitHub() {
    let name = prompt("Введите логин на GitHub?", "");
    try {
    let user = await req(`https://api.github.com/users/${name}`);
    document.write(`Полное имя: ${user.name}, уникальный номер: ${user.id}.`);
    return user;
    }
    catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
            document.write("Такого пользователя не существует.");
        } else {
            throw err;
        }
    }
}

getGitHub();
