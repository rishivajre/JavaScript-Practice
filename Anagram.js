function areAnagrams(str1, str2){
  if (!str1 || !str2 || str1.length !== str2.length) return false;
  // if (str1.length !== str2.length || !str1 || !str2) return false; 🚫
  str1 = str1.toLowerCase().split('').sort().join('');
  str2 = str2.toLowerCase().split('').sort().join('');  
  return str1 === str2;
}
console.log(areAnagrams('121Listen', 'silenT211'));
console.log(areAnagrams('hello', 'world'));
console.log(areAnagrams('ppookk'));
/**
 *          +---------------------+
            | Function Call       |
            | str1, str2          |
            +---------------------+
                     |
                     v
            +---------------------+
            | Check: !str1, !str2,|
            | str1.length !==     |
            | str2.length         |
            +---------------------+
               |               |
         True  |               | False
    (Empty/Unequal)            |
               |               v
               v       +---------------------+
       +---------------| Convert to          |
       |               | Lowercase           |
       |               +---------------------+
       |                       |
       v                       v
  +----------------+   +---------------------+
  | Return False   |   | Split into Chars    |
  +----------------+   +---------------------+
                               |
                               v
                       +---------------------+
                       | Sort Characters     |
                       +---------------------+
                               |
                               v
                       +---------------------+
                       | Join into String    |
                       +---------------------+
                               |
                               v
                       +---------------------+
                       |Compare str1 === str2|
                       +---------------------+
                            |           |
                        True            | False
                            |           |
                            v           v
                       +---------+   +---------+
                       | Return  |   | Return  |
                       | True    |   | False   |
                       +---------+   +---------+
 */

console.log('------OR--------');

function areAnagrams1(str1, str2) {
    // Remove spaces and convert to lowercase
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
  
    // Check if lengths are different
    if (str1.length !== str2.length) return false;
  
    // Sort characters and compare
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
  }
  
  console.log(areAnagrams1('listen', 'silent')); // true
  console.log(areAnagrams1('hello', 'world')); // false

  /**
   *        +---------------------+
            | Function Call       |
            | str1, str2          |
            +---------------------+
                     |
                     v
            +---------------------+
            | Remove Spaces       |
            | (replace(/\s/g, ''))|
            +---------------------+
                     |
                     v
            +---------------------+
            | Convert to Lowercase|
            +---------------------+
                     |
                     v
            +---------------------+
            | Check Length        |
            | str1.length !==     |
            | str2.length         |
            +---------------------+
               |               |
         True  |               | False
    (Unequal)  |               |
               |               v
               v       +---------------------+
       +---------------| Split into Chars    |
       |               +---------------------+
       |                       |
       v                       v
  +----------------+   +---------------------+
  | Return False   |   | Sort Characters     |
  +----------------+   +---------------------+
                               |
                               v
                       +---------------------+
                       | Join into String    |
                       +---------------------+
                               |
                               v
                       +---------------------+
                       | Compare Sorted Strings|
                       | sortedStr1 === sortedStr2|
                       +---------------------+
                            |           |
                        True           | False
                            |           |
                            v           v
                       +---------+   +---------+
                       | Return  |   | Return  |
                       | True    |   | False   |
                       +---------+   +---------+
   */