import chalk from 'chalk';
import dedent from 'dedent-js';

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