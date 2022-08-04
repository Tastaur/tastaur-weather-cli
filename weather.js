#!/usr/bin/env node
import {argsFromArgv} from './helpers/index.js'
import {printHelp} from "./services/logService.js";
import {saveCity, saveToken} from "./services/storageService.js";
import {requestWeather} from "./services/requesService.js";

const init = () => {
    const args = argsFromArgv(process.argv)
    if (args.h) {
        return printHelp()
    }
    if (args.c) {
        return saveCity(args.c)
    }
    if (args.t) {
        return saveToken(args.t)
    }
    return requestWeather()
}

init()