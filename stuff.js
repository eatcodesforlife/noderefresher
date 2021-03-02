const hello = (str) => {
    return 'hello world!' + str
}

const add = (n1, n2) => {
    let sum = n1 + n2
    return `the sume of ${n1} and ${n2} is ${sum}.`
}

const count = ( arr ) => {
    const str = `${arr.length} elements has been passed`
    return str
}


module.exports = {
    hello,
    add,
    count
}