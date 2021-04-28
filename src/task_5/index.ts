/** Задача 5
 * Реализовать GET запрос для получения blob объекта по sha ключу
 * Использовать: https://docs.github.com/en/rest/reference/git#get-a-blob
 * Не забывайте, что пригодится аутентификация и ключ:
 * https://docs.github.com/en/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation
*/

import {AxiosInstance} from "axios";

const axios = require('axios');

const GHInstance: AxiosInstance = axios.create({
    baseURL: 'https://api.github.com/repos/daleunixal/ts-task-4/',
    headers: {'Authorization': 'token YOUR_TOKEN'}
})

GHInstance.get("git/blobs/7bff95bed78fa2eb983c58195f13c5b74711413c").then(console.log)
