#!/usr/bin/env node
import {argsFromArgv} from './helpers/index.js'
import {printHelp} from "./services/logService.js";
import {saveCity, saveToken} from "./services/storageService.js";

const init = () => {
    const args = argsFromArgv(process.argv)
    if (args.h) {
        return printHelp()
    }
    if (args.c) {
        return saveCity(args.s)
    }
    if (args.t) {
        return saveToken('123')
    }
}

init()