const capitaliseEach = input => input.split(' ').map(w => w.length > 0 ? w[0].toUpperCase() + w.slice(1) : "").join(' ');
// console.log(capitaliseEach("wah kya bat hai..."));