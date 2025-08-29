var length = 20;

function count() {
    console.log(this.length);
}

const data = [count, "A", 0]; //3 elements of the array is being printed here. Why?

data[0] ("hey!!");

console.log(data.length);

console.log(data[0]()); //