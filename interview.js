//. Reverse a Array built  & unbuilt


let arr = [1, 2, 3, 4, 5]
let rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
    rev += arr[i]
}
console.log()

let nums = [10, 20, 30];
let revNums = [];
for (let i = nums.length - 1; i >= 0; i--) {
    revNums.push(nums[i]);
}
console.log(revNums);
let nums = [10, 20, 30];
let revNums = [];
for (let i = nums.length - 1; i >= 0; i--) {
    revNums.push(nums[i]);
}
console.log(revNums);

//date 02-07-2024

function reversestring(str) {
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i]
    }
    return res
}
console.log(reversestring("kahtraS"))

let str = "elabmoB";
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}
console.log(reverse);

let arr = [1, 2, 3, 4, 5, 6];
let res = [];
res = arr.reverse();
console.log(res)

for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i])
}
console.log(res)

//print 1 to 5

for (let i = 1; i <= 5; i++) {
    console.log(i)
}

for (let i = 1; i <= 5; i++) {
    if (i === 5) {
        console.log(`function for only printing ${i}`);
        break;
    }
}



//Check Palindrome
function isStringPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed === str;
}
console.log(isStringPalindrome("madam"));
console.log(isStringPalindrome("bob"));

function isStringpalindrome(str) {
    let reversed = "";
    reversed = str.split("").reverse().join("");
    return reversed === str;
}
console.log(isStringpalindrome("bob"));
console.log(isStringpalindrome("Arya"));



function isStringRev(str) {
    return str.split("").reverse().join("");
}
console.log(isStringRev("Bombale"));

function reveserseString(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev
}
console.log(reveserseString("Sarthak"))

let arr = [1, 2, 3, 4, 5, 6];
let res = [];
res = arr.reverse();
console.log(res);

let arrr = [6, 5, 4, 3, 2, 1];
let ress = [];
for (let i = arrr.length - 1; i >= 0; i--) {
    ress.push(arrr[i]);
}

console.log(ress);

function isStringPalindrome(str) {
    let rev = "";
    rev = str.split("").reverse().join("");
    return rev === str;
}
console.log(isStringPalindrome("anna"))

function isStringPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]
    }
    return rev === str;
}
console.log(isStringPalindrome("bob"))
console.log(isStringPalindrome("tom"))

function largest(nums) {
    return Math.max(...nums);
}
console.log(largest([1, 22, 33, 66, 4]));

let nums = [12, 13, 14, 15,];
let max = nums[0];

for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i]
    }
}

console.log(max)


let numbers = [1, 2, 344, 555, 66, 8998];
let findMax = [];
findMax = Math.max(...numbers);
console.log(findMax)

function largesNum(arr) {
    findBig = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > findBig) {
            findBig = arr[i]
        }
    }
    return findBig
}
console.log(largesNum([12, 13, 14, 18]));

let arr = [12, 14, 16];
let big = arr[0];
// big = Math.max(...arr);
// console.log(big)
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > big) {
        big = arr[i];
    }
}

console.log(big)


function laregestnum(num) {
    let big = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] > big) {
            big = num[i]
        }
    }
    return big
}
console.log(laregestnum([12, 14, 2, 67]));

let a = [12, 23, 45, 7, 100];
let b = []
b = Math.max(...a);
console.log(b)

function reverseString(str) {
    reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse
}
console.log(reverseString('kahtras'))

let str = "elabmob";
let rev = "";
rev = str.split("").reverse().join("");
console.log(rev);

let arr = [1, 2, 3, 4, 5, 6];
let reve = [];
reve = arr.reverse()
console.log(reve)

let number = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let rever = [...number].reverse();
console.log(rever)

function checkstringpalindrome(str) {
    let revert = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revert += str[i]
    }
    return revert === str
}
console.log(checkstringpalindrome("non"))
console.log(checkstringpalindrome("hehe"))

//04/05/2026
function outer() {
    let count = 0;
    return function () {
        count++;
        return count
    }
}
let counter = outer();
console.log(counter());

function greet(name) {
    return function () {
        console.log("hello " + name)
    }
}
let sayhello = greet("sarthak");
sayhello()

function reverseString(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse
}
console.log(reverseString("boB"))


function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        }

    }
}

let countingStart = createCounter();

countingStart.increment();
countingStart.increment();
countingStart.decrement();


function outer() {
    let count = 0;
    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        }
    }
}
let counter = outer();
counter.increment();
counter.increment();
counter.decrement();

function greet(name) {
    console.log("hello " + name);
}
greet("sarthak");

function isStringpalindrome(str) {
    let rev = "";
    rev = str.split("").reverse().join("");
    return rev === str;
}
console.log(isStringpalindrome("mom"))
console.log(isStringpalindrome("Mom"))//cause its capital;

function isStrPalidrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev === str;
}
console.log(isStrPalidrome("Mom"));
console.log(isStrPalidrome("non"));

console.log(x);
var x = 10;

let str = "sarthak";
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}
console.log(reverse);

reverse = str.split("").reverse().join("");
console.log(reverse);

let arr = [1, 2, 3, 4, 5, 6];
let rev = [];
// rev = [...arr].reverse();
// console.log(rev)
for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
}
console.log(rev)

function prints() {
    for (let i = 0; i < 3; i++) {
        console.log(3)
    }
}
prints()

let add = (a, b) => {
    return a + b;
}
console.log(add(2, 2));

let multiply = (a, b) => {
    return a * b;
}
console.log(multiply(5, 2))


//Leetcode reverse number problem;
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x === undefined || x === null) return false;
    let str = x.toString()
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed === str;
};

console.log(isPalindrome(121));  // Output: true
console.log(isPalindrome(-121)); // Output: false

function print1to3() {
    for (let i = 1; i <= 3; i++) {
        console.log(3)
    }
}

print1to3();

function revserseStr(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
console.log(revserseStr("kahtraS"));

let str = "kahtraS elabmoB";
let reverse = "";
reverse = str.split("").reverse().join("");
console.log(reverse);

let arr = [1, 2, 3, 4, 5, 6, 7];
let rev = [];
rev = [...arr].reverse();
console.log(rev);

let Arrayy = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let reversed = [];
for (let i = Arrayy.length - 1; i >= 0; i--) {
    reversed.push(Arrayy[i]);
}


console.log(reversed);

function greet(name) {
    return function () {
        console.log("Hello " + name);
    }
}
let sayhello = greet("Sarthak");

sayhello();

function largest(arr) {
    return Math.max(...arr);
}
console.log(largest([12, 45, 67, 89]));

function biggestNumber(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i] > max;
        max = arr[i]
    }
    return max;
}

console.log(biggestNumber([12, 45, 56]));


function missing(arr, n) {
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((a, b) => a + b, 0);

    return total - sum;
}

console.log(missing([1, 2, 4, 5], 5));

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("hello"));

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a, b);


//debouning in js code 
function debounce(fn, dealy) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args)
        }, dealy)
    }
}

function searchdata(value) {
    console.log("Api Call:", value)
};

optimizedSeach = debounce(searchdata, 2000);

optimizedSeach("function is debounce after 2 seconds")

import { useState } from "react";

// 1. Fixed initialization syntax
const [text, setText] = useState("");

function debounce(fn, dealy) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => { fn(...args); }, dealy);
    };
}

// 2. Fixed function assignment syntax
const handleSearch = debounce((value) => {
    console.log("Searching", value);
}, 4000);

export default function App() {
    return (
        <input
            type="text"
            onChange={(e) => {
                setText(e.target.value);
                handleSearch(e.target.value);
            }}
        />
    );
}


function throttle(fn, delay) {
    let lastCall = 0;

    return function (...args) {
        let now = new Date().getTime();

        if (now - lastCall < delay) {
            return;
        }

        lastCall = now;
        fn(...args);
    };
}

// Example
function handleScroll() {
    console.log("Scroll Event");
}

const optimizedScroll = throttle(handleScroll, 2000);

// Check the prime numbers 
function isPrime(num) {
    if (num <= 0) return false;
    for (let i = 2; i < num; i++) {
        if (num % 2 === 0) return false;
    }
    return true
}
console.log(isPrime(7));
console.log(isPrime(2));
console.log(isPrime(10))

const arr = [4, 6, 9, 5, 3, 1, 7];

arr.sort((a, b) => a - b);
console.log(arr)

function countVowels(str) {
    return str.match(/[aeiou]/gi).length
};
console.log(countVowels('javascript'));

const nums = [1, 2, 3];

const sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

const nums = [1, 2, 3, 4];

const result = nums.filter((x) => x > 2);

console.log(result);

const arr = [1, 2, 3];

const result = arr.map((x) => x * 2);

console.log(result);


function reverseString(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
console.log(reverseString("Sarthak"));

function revStr(str) {
    return str.split("").reverse().join("");
}

console.log(revStr("Bombale"));

function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--
            return count
        }
    }
}

const counter = createCounter();

console.log(counter.increment());
console.log(counter.decrement());

function printName(name) {
    return console.log("Hello " + name)
}
let sayHello = printName;

sayHello("Sarthak")

function revStr(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}
console.log(revStr("Sarthak"));

function revStr(str) {
    return str.split("").reverse().join("");
}
console.log(revStr("Bombale"));

function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++
            return count
        },
        decrement: function () {
            count--
            return count
        }
    }
}

const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clerTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("hello"));

function greet(name, callback) {
    console.log("Hello " + name);

    callback();
}

greet("John", function () {
    console.log("Callback executed");
});


function isStringPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]
    }
    return rev === str
}
console.log(isStringPalindrome("madam"));
console.log(isStringPalindrome("its not palindrome return false"));

function largest(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(largest([12, 3, 45, 67]));

function largest(arr) {
    return Math.max(...arr)
}
console.log(largest([100, 3, 4, 5, 6, 89, 9]))



function reverseString(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

console.log(reverseString("abcd"));

function rereseStr(str) {
    return str.split("").reverse().join("")
};

console.log(rereseStr("ABCD"));


function isStringPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]
    }
    return rev === str
}
console.log(isStringPalindrome("mom"));
console.log(isStringPalindrome("hello"));

function printTo(max) {
    for (let i = 5; i <= 5; i++) {
        console.log(i)
    }
}
printTo();

function repeat(times) {
    for (let i = 1; i <= times; i++) {
        console.log(i)
    }
}
repeat(3);

function repeatThree(times) {
    for (let i = 1; i <= times; i++) {
        console.log(3)
    }
}
repeatThree(3);

function printPattern(lines) {
    for (let i = 1; i <= lines; i++) {
        let rows = "";
        for (let j = 1; j <= i; j++) {
            rows += j
        }
        console.log(rows)
    }
}
printPattern(5);

function starRightPattern(lines) {
    for (let i = 1; i <= lines; i++) {
        let rows = "";
        for (let j = 1; j <= i; j++) {
            rows += "*"
        }
        console.log(rows)
    }
}
starRightPattern(5);

function starLeftPattern(lines) {
    for (let i = 1; i <= lines; i++) {
        let rows = "";
        for (let k = 1; k <= lines - i; k++) {
            rows += " ";
        }
        for (let j = 1; j <= i; j++) {
            rows += "*"
        }
        console.log(rows)
    }
}

starLeftPattern(5)

let n = parseInt(prompt("Enter rows for Pyramid Pattern: "));

for (let i = 1; i <= n; i++) {
    let row = "";

    row += "  ".repeat(n - i);
    row += "* ".repeat(i * 2 - 1);
    console.log(row);
}


Array.prototype.myReduce = function (callback, initialValue) {
    // 'this' points to the array calling myReduce
    const array = this;

    // Determine if initialValue was passed, and set starting index/accumulator
    let hasInitialValue = arguments.length > 1;
    let accumulator = hasInitialValue ? initialValue : array[0];
    let startIndex = hasInitialValue ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        // Handle sparse arrays (empty slots)
        if (i in array) {
            accumulator = callback(accumulator, array[i], i, array);
        }
    }

    return accumulator;
};

// --- Test Case ---
const numbers = [1, 2, 3, 4];
const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10
function debounce(func, delay) {
    let timerId;

    return function (...args) {
        // Preserve the execution context (this)
        const context = this;

        // Clear the previous timer if the function is called again before the delay ends
        clearTimeout(timerId);

        // Set a new timer
        timerId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

// --- Test Case ---
const logMessage = (msg) => console.log(`Search query: ${msg}`);
const debouncedLog = debounce(logMessage, 300);

// Simulating rapid typing
debouncedLog("a");
debouncedLog("ab");
debouncedLog("abc"); // Only this final call executes after 300ms

function flattenArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // Recursively flatten the inner array and merge it
            result = result.concat(flattenArray(arr[i]));
        } else {
            // Push the primitive value
            result.push(arr[i]);
        }
    }

    return result;
}

// Alternative modern approach using reduce:
const flattenWithReduce = (arr) => {
    return arr.reduce((acc, item) => {
        return acc.concat(Array.isArray(item) ? flattenWithReduce(item) : item);
    }, []);
};

// --- Test Case ---
const nested = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nested)); // Output: [1, 2, 3, 4, 5, 6]


function isStringPalindrome(str) {
    let pal = "";
    for (let i = str.length - 1; i >= 0; i--) {
        pal += str[i];
    }
    return pal === str
}

console.log(isStringPalindrome("mom"))
console.log(isStringPalindrome("naman"))

function reverseString(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse
}

console.log(reverseString("kahtraS"));

function revStr(str) {
    return str.split("").reverse().join("");
}
console.log(revStr("elabmoB"));

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(4));


function reverseString(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]
    }
    return rev
}

console.log(reverseString("woeM"));

let str = "UJAR";
let reverse = str.split("").reverse().join("");
console.log(reverse);

function isStrPalindrome(str) {
    let pal = "";
    for (let i = str.length - 1; i >= 0; i--) {
        pal += str[i]
    }
    return pal === str;
}
console.log(isStrPalindrome("mom"));
console.log(isStrPalindrome("Tom"));

let strr = "naman";
let reve = ""
for (let i = strr.length - 1; i >= 0; i--) {
    reve += strr[i];
}
console.log(reve === strr);


function debounce(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        setTimeout(() => {
            fn();
        }, delay)
    }
}

function CreateCounter() {
    let count = 0;
    return {
        increment: function () {
            count++
            return count;
        },
        decrement: function () {
            count--
            return count;
        }
    }
}
let counter = CreateCounter();

console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())

const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged);


function greet(name, callback) {
    console.log("Hellow " + name)
    callback();
}

greet("Sarthak", function () {
    console.log('Callback Execuated')
})

const promise = new Promise((resolve, reject) => {
    resolve("Success");
});

promise.then(res => console.log(res));

setTimeout(() => {
    console.log("Timout execuated");
}, 2000)

async function fetchData() {
    return "Data Recived"
}
fetchData().then(console.log)


function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();


function findMax(arr) {
    // Edge case: Handle empty arrays
    if (arr.length === 0) {
        return undefined;
    }

    let max = arr[0]; // Assume the first element is the largest

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if a larger value is found
        }
    }

    return max;
}

// Example usage:
console.log(findMax([3, 7, 2, 9, 5]));
console.log(findMax([-10, -3, -5, -1]));

function flattenArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // Recursively flatten the nested array and merge it
            result = result.concat(flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(flattenArray([1, [2, [3, 4], 5], 6]));


function twoSum(nums, target) {
    const map = new Map(); // Stores: Map(value => index)

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];


        if (map.has(complement)) {
            return [map.get(complement), i];
        }


        map.set(nums[i], i);
    }

    return [];
}


console.log(twoSum([2, 7, 11, 15], 9));

function revStr(str){
    let reverse ="";
    for(let i = str.length -1; i >= 0;i--){
        reverse += str[i]
    }
    return reverse;
}
console.log(revStr("hsaY"))


function revStr(str) {
    return str.split("").reverse().join("");
}
console.log(revStr("elabmoB"));

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(4));


function reverseString(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]
    }
    return rev
}

console.log(reverseString("woeM"));

let str = "UJAR";
let reverse = str.split("").reverse().join("");
console.log(reverse);

function isStrPalindrome(str) {
    let pal = "";
    for (let i = str.length - 1; i >= 0; i--) {
        pal += str[i]
    }
    return pal === str;
}
console.log(isStrPalindrome("mom"));
console.log(isStrPalindrome("Tom"));

let strr = "naman";
let reve = ""
for (let i = strr.length - 1; i >= 0; i--) {
    reve += strr[i];
}
console.log(reve === strr);


function debounce(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        setTimeout(() => {
            fn();
        }, delay)
    }
}

function revStr(str) {
    return str.split("").reverse().join("");
}
console.log(revStr("elabmoB"));

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(4));


function reverseString(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]
    }
    return rev
}

console.log(reverseString("woeM"));

let str = "UJAR";
let reverse = str.split("").reverse().join("");
console.log(reverse);

function isStrPalindrome(str) {
    let pal = "";
    for (let i = str.length - 1; i >= 0; i--) {
        pal += str[i]
    }
    return pal === str;
}
console.log(isStrPalindrome("mom"));
console.log(isStrPalindrome("Tom"));

let strr = "naman";
let reve = ""
for (let i = strr.length - 1; i >= 0; i--) {
    reve += strr[i];
}
console.log(reve === strr);


function debounce(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        setTimeout(() => {
            fn();
        }, delay)
    }
}

function missing(arr, n) {
  let total = (n * (n + 1)) / 2;
  let sum = arr.reduce((a,b) => a + b, 0);

  return total - sum;
}

console.log(missing([1,2,4,5], 5));



function frequency(arr) {
  let count = {};

  arr.forEach(item => {
    count[item] = (count[item] || 0) + 1;
  });

  return count;
}

console.log(frequency([1,1,2,3,2]));
function flattenArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // Recursively flatten the nested array and merge it
            result = result.concat(flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(flattenArray([1, [2, [3, 4], 5], 6]));


function twoSum(nums, target) {
    const map = new Map(); // Stores: Map(value => index)

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];


        if (map.has(complement)) {
            return [map.get(complement), i];
        }


        map.set(nums[i], i);
    }

    return [];
}


console.log(twoSum([2, 7, 11, 15], 9));

function revStr(str){
    let reverse ="";
    for(let i = str.length -1; i >= 0;i--){
        reverse += str[i]
    }
    return reverse;
}
console.log(revStr("hsaY"))


function revStr(str) {
    return str.split("").reverse().join("");
}
console.log(revStr("elabmoB"));

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(4));

let arr = [1, 2, 3, 4, 5]
let rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
    rev += arr[i]
}
console.log()

let nums = [10, 20, 30];
let revNums = [];
for (let i = nums.length - 1; i >= 0; i--) {
    revNums.push(nums[i]);
}
console.log(revNums);
let nums = [10, 20, 30];
let revNums = [];
for (let i = nums.length - 1; i >= 0; i--) {
    revNums.push(nums[i]);
}
console.log(revNums);

//date 02-07-2024

function reversestring(str) {
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i]
    }
    return res
}
console.log(reversestring("kahtraS"))

let str = "elabmoB";
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}
console.log(reverse);

let arr = [1, 2, 3, 4, 5, 6];
let res = [];
res = arr.reverse();
console.log(res)

for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i])
}
console.log(res)

//print 1 to 5

for (let i = 1; i <= 5; i++) {
    console.log(i)
}

for (let i = 1; i <= 5; i++) {
    if (i === 5) {
        console.log(`function for only printing ${i}`);
        break;
    }
}



//Check Palindrome
function isStringPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed === str;
}
console.log(isStringPalindrome("madam"));
console.log(isStringPalindrome("bob"));

function isStringpalindrome(str) {
    let reversed = "";
    reversed = str.split("").reverse().join("");
    return reversed === str;
}
console.log(isStringpalindrome("bob"));
console.log(isStringpalindrome("Arya"));


function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment() {
      count++;
    },
    getValue() {
      return count;
    }
  };
}

// Usage
const counter = createCounter();
counter.increment();
console.log(counter.getValue()); 
console.log(counter.count); 

function debounce(func, delay) {
  let timerId;
  
  return function (...args) {
    // Clear the previous timer if the function is called again quickly
    clearTimeout(timerId);
    
    // Set a new timer
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage
const handleSearch = debounce((query) => console.log(query), 300);

function flatten(arr) {
  return arr.reduce((acc, val) => {
    // If the element is an array, recursively flatten it
    return acc.concat(Array.isArray(val) ? flatten(val) : val);
  }, []);
}

// Usage
console.log(flatten([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]

function deepClone(obj) {
  // Handle primitives and null
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // Handle Arrays
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  
  // Handle Objects
  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}

// Usage
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
clone.b.c = 99;
console.log(original.b.c); // 2 (Original is unaffected)

const removeDuplicates = (arr) => [...new Set(arr)];

// Usage
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 1])); // [1, 2, 3, 4]
let arr = [1, 2, 3, 4, 5]
let rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
    rev += arr[i]
}
console.log()

let nums = [10, 20, 30];
let revNums = [];
for (let i = nums.length - 1; i >= 0; i--) {
    revNums.push(nums[i]);
}
console.log(revNums);
let nums = [10, 20, 30];
let revNums = [];
for (let i = nums.length - 1; i >= 0; i--) {
    revNums.push(nums[i]);
}
console.log(revNums);

//date 02-07-2024

function reversestring(str) {
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i]
    }
    return res
}
console.log(reversestring("kahtraS"))

let str = "elabmoB";
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}
console.log(reverse);

let arr = [1, 2, 3, 4, 5, 6];
let res = [];
res = arr.reverse();
console.log(res)

for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i])
}
console.log(res)

//print 1 to 5

for (let i = 1; i <= 5; i++) {
    console.log(i)
}

for (let i = 1; i <= 5; i++) {
    if (i === 5) {
        console.log(`function for only printing ${i}`);
        break;
    }
}



//Check Palindrome
function isStringPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed === str;
}
console.log(isStringPalindrome("madam"));
console.log(isStringPalindrome("bob"));

function isStringpalindrome(str) {
    let reversed = "";
    reversed = str.split("").reverse().join("");
    return reversed === str;
}
console.log(isStringpalindrome("bob"));
console.log(isStringpalindrome("Arya"));



function isStringRev(str) {
    return str.split("").reverse().join("");
}
console.log(isStringRev("Bombale"));

function reveserseString(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev
}
console.log(reveserseString("Sarthak"))


function flattenArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // Recursively flatten the nested array and merge it
            result = result.concat(flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(flattenArray([1, [2, [3, 4], 5], 6]));


function twoSum(nums, target) {
    const map = new Map(); // Stores: Map(value => index)

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];


        if (map.has(complement)) {
            return [map.get(complement), i];
        }


        map.set(nums[i], i);
    }

    return [];
}


console.log(twoSum([2, 7, 11, 15], 9));

function revStr(str){
    let reverse ="";
    for(let i = str.length -1; i >= 0;i--){
        reverse += str[i]
    }
    return reverse;
}
console.log(revStr("hsaY"))


function revStr(str) {
    return str.split("").reverse().join("");
}
console.log(revStr("elabmoB"));

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(4));


function reverseString(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]
    }
    return rev
}

console.log(reverseString("woeM"));

let str = "UJAR";
let reverse = str.split("").reverse().join("");
console.log(reverse);

function isStrPalindrome(str) {
    let pal = "";
    for (let i = str.length - 1; i >= 0; i--) {
        pal += str[i]
    }
    return pal === str;
}
console.log(isStrPalindrome("mom"));
console.log(isStrPalindrome("Tom"));

let strr = "naman";
let reve = ""
for (let i = strr.length - 1; i >= 0; i--) {
    reve += strr[i];
}
console.log(reve === strr);


function debounce(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        setTimeout(() => {
            fn();
        }, delay)
    }
}

function revStr(str) {
    return str.split("").reverse().join("");
}
console.log(revStr("elabmoB"));

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(4));


function reverseString(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]
    }
    return rev
}

console.log(reverseString("woeM"));

let str = "UJAR";
let reverse = str.split("").reverse().join("");
console.log(reverse);

function isStrPalindrome(str) {
    let pal = "";
    for (let i = str.length - 1; i >= 0; i--) {
        pal += str[i]
    }
    return pal === str;
}
console.log(isStrPalindrome("mom"));
console.log(isStrPalindrome("Tom"));

let strr = "naman";
let reve = ""
for (let i = strr.length - 1; i >= 0; i--) {
    reve += strr[i];
}
console.log(reve === strr);


function debounce(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        setTimeout(() => {
            fn();
        }, delay)
    }
}

function missing(arr, n) {
  let total = (n * (n + 1)) / 2;
  let sum = arr.reduce((a,b) => a + b, 0);

  return total - sum;
}

console.log(missing([1,2,4,5], 5));

let arr = [1, 2, 3, 4, 5]
let rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
    rev += arr[i]
}
console.log()

let nums = [10, 20, 30];
let revNums = [];
for (let i = nums.length - 1; i >= 0; i--) {
    revNums.push(nums[i]);
}
console.log(revNums);
let nums = [10, 20, 30];
let revNums = [];
for (let i = nums.length - 1; i >= 0; i--) {
    revNums.push(nums[i]);
}
console.log(revNums);

function reversestring(str) {
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i]
    }
    return res
}
console.log(reversestring("kahtraS"))

let str = "elabmoB";
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}
console.log(reverse);

let arr = [1, 2, 3, 4, 5, 6];
let res = [];
res = arr.reverse();
console.log(res)

for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i])
}
console.log(res)

//print 1 to 5

for (let i = 1; i <= 5; i++) {
    console.log(i)
}

for (let i = 1; i <= 5; i++) {
    if (i === 5) {
        console.log(`function for only printing ${i}`);
        break;
    }
}

let nums = [10, 20, 30];
let revNums = [];
for (let i = nums.length - 1; i >= 0; i--) {
    revNums.push(nums[i]);
}
console.log(revNums)

let arr =;
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}
console.log(arr);

let items = ["apple", "banana", "cherry"];
for (let item of items) {
    console.log(item);
}

let values =;
for (let i = 0; i < values.length; i += 2) {
    console.log(values[i]);
}

let mixNums =;
let sum = 0;
for (let i = 0; i < mixNums.length; i++) {
    if (mixNums[i] > 10) {
        sum += mixNums[i];
    }
}
console.log(sum);

let dataset =;
let divisibleByThree = dataset.filter(num => num % 3 === 0);
console.log(divisibleByThree);

let stock = ["apple", "banana", "apple", "orange", "banana", "apple"];
let appleCount = 0;
for (let i = 0; i < stock.length; i++) {
    if (stock[i] === "apple") {
        appleCount++;
    }
}
console.log(appleCount);

let word = "radar";
let isPalindrome = true;
for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
console.log(isPalindrome);

let sentence = "hello world";
let vowels = "aeiouAEIOU";
let stripped = "";
for (let i = 0; i < sentence.length; i++) {
    if (!vowels.includes(sentence[i])) {
        stripped += sentence[i];
    }
}
console.log(stripped);

let text = "hello learning javascript is fun";
let words = text.split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
console.log(words.join(" "));
let orders =;
for (let order of orders) {
    if (order === 0) {
        continue;
    }
    console.log(`Shipping order worth $${order}`);
}

let products = ["Laptop", "Phone", "Tablet"];
products.forEach((item, index) => {
    console.log(`Item #${index + 1}: ${item}`);
});

let usernames = ["Harry", "Sarthak", "Rohit"];
let scores =;
for (let i = 0; i < usernames.length; i++) {
    console.log(`${usernames[i]} achieved a score of ${scores[i]}`);
}

let notifications = ["Logged in", "Updated profile", "Logged out"];
for (let i = notifications.length - 1; i >= 0; i--) {
    console.log(`Log event: ${notifications[i]}`);
}

let students = ["Sarthak", "Rohit", "Harry"];
let sortedStudents = [...students].sort();
for (let student of sortedStudents) {
    console.log(`Student: ${student}`);
}

function checkPrimeNumber(num){
    if(num <= 1)return false;
    if(num === 2)return true;
    for(let i = 2; i <= Math.sqrt(num);i++){
        if(num % 2 === 0) {
            return false
        }
    }
    return true
}
console.log(checkPrimeNumber(3))
console.log(checkPrimeNumber(1))
console.log(checkPrimeNumber(2))
console.log(checkPrimeNumber(99))
console.log(checkPrimeNumber(102))

function isStrPalindrome(str){
    let lowerStr = str.toLowerCase() 
    let reverse = ""
    for(let i = lowerStr.length -1; i >= 0;i--){
        reverse += lowerStr[i]
    }
    
    return lowerStr === reverse
}

console.log(isStrPalindrome("Mom")) 
console.log(isStrPalindrome("mom"))
console.log(isStrPalindrome("cow")) 


for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
// print 444 

let user1 = { name: "Harry", skills: ["JS", "Python"] };
let user2 = { ...user1 };

user2.name = "Rohit";
user2.skills.push("SQL");

console.log(user1.name);   
console.log(user1.skills); 

let text = "backend programming with node is awesome";
let words = text.split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
console.log(words.join(" "));

let prices =;
for (let price of prices) {
    if (price === 0) {
        continue;
    }
    console.log(`Product price tag: $${price}`);
}

let roles = ["Admin", "Editor", "Viewer"];
roles.forEach((item, index) => {
    console.log(`Role #${index + 1}: ${item}`);
});

let keys = ["status", "code", "message"];
let values = ["success", 200, "OK"];
for (let i = 0; i < keys.length; i++) {
    console.log(`Response ${keys[i]} is ${values[i]}`);
}

let items = ["item1", "item2", "item3"];
for (let i = items.length - 1; i >= 0; i--) {
    console.log(`Popping: ${items[i]}`);
}

let fruits = ["banana", "apple", "cherry"];
let sortedFruits = [...fruits].sort();
for (let fruit of sortedFruits) {
    console.log(`Fruit: ${fruit}`);
}

function checkEvenNumber(num) {
    if (num <= 0) return false;
    if (num % 2 === 0) {
        return true;
    }
    return false;
}
console.log(checkEvenNumber(4));
console.log(checkEvenNumber(7));

function isWordMatch(word, target) {
    let lowerWord = word.toLowerCase();
    let lowerTarget = target.toLowerCase();
    return lowerWord === lowerTarget;
}
console.log(isWordMatch("Admin", "admin"));

for (var count = 1; count <= 3; count++) {
    setTimeout(() => {
        console.log(count);
    }, 500);
}

let originalCart = { id: 101, items: ["phone", "case"] };
let clonedCart = { ...originalCart };
clonedCart.id = 102;
clonedCart.items.push("charger");
console.log(originalCart.id);
console.log(originalCart.items);
function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
function groupAnagrams(words) {
    let cache = {};
    for (let word of words) {
        let sortedWord = word.split("").sort().join("");
        if (!cache[sortedWord]) {
            cache[sortedWord] = [];
        }
        cache[sortedWord].push(word);
    }
    return Object.values(cache);
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0;
    let maxSize = 0;
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxSize = Math.max(maxSize, right - left + 1);
    }
    return maxSize;
}
console.log(lengthOfLongestSubstring("abcabcbb"));
function findMissingNumber(nums) {
    let n = nums.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
    for (let num of nums) {
        actualSum += num;
    }
    return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 4, 5, 6]));

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(11));
console.log(isPrime(4));
