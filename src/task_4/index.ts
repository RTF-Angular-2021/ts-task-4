/** Задача 4
 * Реализовать POST запрос для сохранения файла в виде blob объекта в хранилище GitHub
 * Использовать: https://docs.github.com/en/rest/reference/git#create-a-blob
 * Не забывайте, что пригодится аутентификация и ключ:
 * https://docs.github.com/en/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation
*/
import {AxiosInstance} from "axios";

const axios = require('axios');

const GHInstance: AxiosInstance = axios.create({
    baseURL: 'https://api.github.com/repos/daleunixal/ts-task-4/',
    headers: {'Authorization': 'token YOUR_TOKEN'}
})

GHInstance.post("git/blobs", {
    content: "resdf"
}).then(console.log)


