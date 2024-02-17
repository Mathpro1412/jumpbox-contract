function splitTheBill(obj) {
    let total = 0,
        count = 0

    for (let i in obj) {
        count++
        total += obj[i]
    }

    let averange = total / count

    for (let i in obj) {
        obj[i] = +(obj[i] - averange).toFixed(2)
    }

    return obj
}

console.log(splitTheBill({A:20,B:15,C:10}));