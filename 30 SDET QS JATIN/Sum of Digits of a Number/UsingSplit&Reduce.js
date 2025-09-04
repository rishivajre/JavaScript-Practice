function sumOfDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(sumOfDigits(12345));

/* 
.reduce((sum, digit) => sum + Number(digit), 0)

Iterates over the array and keeps adding each digit to a running total (sum).

Number(digit) converts each character back into a number (otherwise it would be string concatenation).

0 is the initial value of sum.

Dry Run with Input = 12345

num.toString() → "12345"

.split('') → ["1","2","3","4","5"]

Now reduce:

Step	digit	sum (before)	sum + Number(digit)	sum (after)
1	"1"	0	0 + 1	1
2	"2"	1	1 + 2	3
3	"3"	3	3 + 3	6
4	"4"	6	6 + 4	10
5	"5"	10	10 + 5	15

✅ Final result → 15 */