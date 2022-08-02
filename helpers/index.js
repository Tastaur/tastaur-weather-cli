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