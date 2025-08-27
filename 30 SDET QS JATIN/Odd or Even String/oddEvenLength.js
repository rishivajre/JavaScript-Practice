function oddEvenLength(str) {
    const length = str.length;

    if (length % 2 === 0) {
        console.log(`String is Even: ${length}`);
    } else {
        console.log(`String isn't even: ${length}`);
    }
}

oddEvenLength("Martha");