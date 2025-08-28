// @ts-check

function isPalindrom(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindrom("MADAM"));
console.log(isPalindrom("sdf"));