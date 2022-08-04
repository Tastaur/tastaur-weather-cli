import {getCity, getToken} from "./storageService.js";
import {printError, printResult, printSuccess} from "./logService.js";
import axios from "axios";

export const requestWeather = async () => {
    const token = process.env.TOKEN ?? await getToken()
    if (!token) {
        printError('Необходимо добавить токен')
        return
    }
    const city = process.env.city ?? await getCity()
    if (!city) {
        printError('Необходимо выбрать город')
        return
    }
    try {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: city,
                appid: token,
                lang: 'ru',
                units: 'metric'
            }
        })
            .then(response => {
                const {name, main, weather, wind} =  response.data
                printResult({
                    city:name,
                    icon: weather[0].icon,
                    weather_description: weather[0].description,
                    temperature: main.temp,
                    filled_temperature: main.feels_like,
                    humidity: main.humidity,
                    wind_speed: wind.speed
                })

            })
            .catch(err => {
                if (err.response.data.cod === 401) {
                    return printError('Необходимо ввести валидный токен. Получить токен можно на https://openweathermap.org/')
                }
                if (err.response.data.cod === 404) {
                    return printError(`${city} не найден`)
                }
                return printError('Что-то пошло не так...')
            })
    } catch {
        return printError('Что-то пошло не так...')
    }

}