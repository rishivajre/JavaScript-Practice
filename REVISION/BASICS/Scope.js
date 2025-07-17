let outer = "I'm Global var";

function testSCope() {
    let inner = "I'm Inner local var";
    console.log(outer);
    console.log(inner);
}

// console.log(inner); //  ❌ Error.
console.log(testSCope());
// here undefined is returned because function does not return anything explicitly
// but it is not an error, it is just undefined value returned by the function