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
  let response:Response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function getGitHub() {
    let user;
    while(true) {
        let name = prompt("Введите логин на GitHub?", "");

        try {
            user = await req(`https://api.github.com/users/${name}`);
            break; 
        } catch(err) {
            if (err instanceof HttpError && err.response.status == 404) {
                document.write("Такого пользователя не существует.");
            } 
            else 
            {
            throw err;
      }
    }
  }

  document.write(`Полное имя: ${user.name}, уникальный номер: ${user.id}.`);
  return user;
}

getGitHub();
