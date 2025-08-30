function isAnagram(str1, str2) {
    const clean = str => str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');

    return clean(str1) === clean(str2);
}

console.log(isAnagram("Silent", "Listen"));