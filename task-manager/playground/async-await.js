const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b <0){
                return reject('Numbers must be non-neg')
            }
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    const sum = await add(1, 99)
    const sum2 = await add(sum, -2)
    return sum2
}

doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e', e);
})