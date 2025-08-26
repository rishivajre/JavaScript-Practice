var length = 20;

function count() {
    console.log(this.length);
}

const data = [count, "A", 0];

data[0] ("hey!!");