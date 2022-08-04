import chalk from 'chalk';
import dedent from 'dedent-js';
import {getIcon} from "../helpers/index.js";

export const printError = (text) => {
    console.log(chalk.bgRed(`ERROR: ${text}`))
}

export const printSuccess = (text) => {
    console.log(chalk.bgGreen(`SUCCESS: ${text}`))
}

export const printHelp = () => {
    console.log(
        dedent`${chalk.bgYellow('INFO:')}
            Выбрать город: -c [CITY]
            Ввода токена: -t [TOKEN]
            Помощь: -h
            Без параметров - показ погоды
            `)
}

export const printResult = ({
                                 city,
                                 icon,
                                 weather_description,
                                 temperature,
                                 filled_temperature,
                                 humidity,
                                 wind_speed
                             }) => {
    console.log(
        dedent`${chalk.green('Погода в городе:')} ${city}
            ${getIcon(icon)} ${weather_description}
            Температура: ${temperature} (Ощущается: ${filled_temperature})
            Влажность: ${humidity}%
            Скорость ветра: ${wind_speed}
            `)
}