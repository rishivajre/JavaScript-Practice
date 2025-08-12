function swapTemp (a, b) {
    console.log (`Before: a = ${a}, b = ${b}`)

    let temp = a
    a = b
    b = temp

    console.log (`After: a = ${a}, b = ${b}`)
}

swapTemp(10, 220)