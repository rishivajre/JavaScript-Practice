function isPalindromeTwoPointer(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleaned.length -1;

    while (left<right) {
        if (cleaned[left] !== cleaned[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindromeTwoPointer("Hello"));
console.log(isPalindromeTwoPointer("TNT"));