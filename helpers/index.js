export const argsFromArgv = (args) => {
    return args.slice(2).reduce((acc, item, index, array) =>{
        const key = item.substring(1)
        const nextItem = array[index + 1]
        if(item.charAt(0) === '-'){
            if(index === array.length - 1) {
                return {
                    ...acc,
                    [key]: true
                }
            }
            if(nextItem.charAt(0) !== '-') {
                return {
                    ...acc,
                    [key]: nextItem
                }
            }
            return {...acc, [key]: true}
        }
        return acc
    },{})
}

export const getIcon = (icon) =>{
        switch (icon.slice(0, -1)) {
            case '01':
                return '☀️';
            case '02':
                return '🌤️';
            case '03':
                return '☁️';
            case '04':
                return '☁️';
            case '09':
                return '🌧️';
            case '10':
                return '🌦️';
            case '11':
                return '🌩️';
            case '13':
                return '❄️';
            case '50':
                return '🌫️';
        }
}