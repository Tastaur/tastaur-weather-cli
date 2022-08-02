import {homedir} from 'os';
import {join} from 'path';
import {promises} from 'fs';
import {printError, printSuccess} from "./logService.js";


export const saveFilePath = join(homedir(), 'weather-cli.json')

const token = 'token'
const city = 'city'

export const fieldNames = {
    [token]: 'токен',
    [city]: 'город'
}

const isFileExist = async (path) => {
    try {
        await promises.stat(path)
        return true
    } catch {
        return false
    }
}

const readFile = async () => {
    if (await isFileExist(saveFilePath)) {
        const file = await promises.readFile(saveFilePath)
        return JSON.parse(file)
    }
    return undefined;
}

const getKeyValue = async (key) => {
    const data = await readFile()
    return data ? data[key] : undefined
}

export const saveInStorage = async (key, value) => {
    try {
        let data = await readFile()
        await promises.writeFile(saveFilePath, JSON.stringify({...data, [key]: value}))
        printSuccess(`Установлен новый ${fieldNames[key]} - ${value}`)
    } catch (e) {
        printError(`Не удалось установить ${fieldNames[key]}`)
        printError(e.message)
    }
}

export const saveToken = async (value) => {
    await saveInStorage(token, value)
}

export const saveCity = async (value) => {
    await saveInStorage(city, value)
}

export const getToken = async () => {
    await getKeyValue(token)
}

export const getCity = async () => {
    await getKeyValue(city)
}