//. Reverse a Array built  & unbuilt
 

let arr= [1,2,3,4,5]
let rev= [];
for(let i = arr.length- 1;i >=0;i --){
    rev +=arr[i]
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

function reversestring(str){
    let res = "";
    for(let i =str.length - 1;i >=0;i--){
     res += str[i]
    }
    return res
}
console.log(reversestring("kahtraS"))

let str = "elabmoB";
let reverse = "";
for(let i = str.length - 1;i>=0;i --){
    reverse += str[i];
}
console.log(reverse);

let arr = [1,2,3,4,5,6];
let res=[];
 res = arr.reverse();
console.log(res)

for(let i = arr.length - 1;i >=0;i--){
    res.push(arr[i])
}
console.log(res)

//print 1 to 5

for(let i = 1; i <= 5;i++){
    console.log(i)
}

for(let i = 1;i <= 5;i++){
    if(i === 5){
        console.log(`function for only printing ${i}`);
        break;
    }
}



//Check Palindrome
function isStringPalindrome(str){
    let reversed = "";
    for(let i =str.length -1;i >= 0;i--){
        reversed += str[i];
    }
    return reversed === str;
}
console.log(isStringPalindrome("madam"));
console.log(isStringPalindrome("bob"));

function isStringpalindrome(str){
    let reversed = "";
    reversed = str.split("").reverse().join("");
    return reversed === str;
}
console.log(isStringpalindrome("bob"));
console.log(isStringpalindrome("Arya"));



 function isStringRev(str){
     return str.split("").reverse().join("");
 }
 console.log(isStringRev("Bombale"));
 
 function reveserseString(str){
     let rev="";
     for(let i = str.length -1;i >=0;i--){
         rev += str[i];
     }
     return rev
 }
 console.log(reveserseString("Sarthak"))
 
 let arr = [1,2,3,4,5,6];
 let res=[];
  res =arr.reverse();
 console.log(res);
 
 let arrr=[6, 5, 4, 3, 2, 1];
 let ress= [];
for(let i = arrr.length - 1;i>=0;i--){
   ress.push(arrr[i]);
}

console.log(ress);

function isStringPalindrome(str){
    let rev = "";
  rev =  str.split("").reverse().join("");
    return rev === str;
}
console.log(isStringPalindrome("anna"))

function isStringPalindrome(str){
    let rev ="";
    for(let i = str.length -1;i >=0;i--){
        rev += str[i]
    }
    return rev === str;
}
console.log(isStringPalindrome("bob"))
console.log(isStringPalindrome("tom"))

function largest(nums){
    return Math.max(...nums);
}
console.log(largest([1,22,33,66,4]));

let nums = [12,13,14,15,];
let max=nums[0];

for(let i =1; i < nums.length; i++ ){
    if(nums[i] > max){
        max=nums[i]
    }
}

console.log(max)


let numbers=[1,2,344,555,66,8998];
let findMax = [];
findMax = Math.max(...numbers);
console.log(findMax)

function largesNum(arr){
    findBig = arr[0];
    for(let i = 1;i < arr.length;i++){
        if(arr[i] > findBig) {
            findBig = arr[i]
        }
    }
    return findBig
}
console.log(largesNum([12,13,14,18]));

let arr= [12,14,16];
let big = arr[0];
// big = Math.max(...arr);
// console.log(big)
for(let i = 1; i < arr.length;i++){
    if(arr[i] > big){
         big = arr[i];
    }
}

console.log(big)


function laregestnum(num){
    let big = num[0];
    for(let i = 1; i < num.length;i++){
        if(num[i] > big){
            big = num[i]
        }
    }
    return big
}
console.log(laregestnum([12,14,2,67]));

let a = [12,23,45,7,100];
let b = []
b = Math.max(...a);
console.log(b)

function reverseString(str){
    reverse = "";
    for(let i = str.length -1;i >= 0;i--){
        reverse += str[i]
    }
    return reverse
}
console.log(reverseString('kahtras'))

let str= "elabmob";
let rev ="";
rev = str.split("").reverse().join("");
console.log(rev);

let arr = [1,2,3,4,5,6];
let reve =[] ;
reve = arr.reverse()
console.log(reve)

let number = [9,8,7,6,5,4,3,2,1];
let rever = [...number].reverse();
console.log(rever)

function checkstringpalindrome(str){
    let revert = "";
    for(let i = str.length -1;i >= 0;i--){
        revert += str[i]
    }
    return revert === str
}
console.log(checkstringpalindrome("non"))
console.log(checkstringpalindrome("hehe"))

//04/05/2026
function outer(){
    let count = 0;
    return function(){
        count ++;
        return count
    }
}
let counter = outer();
console.log(counter());

function greet(name){
    return function(){
        console.log("hello "+ name) 
    }
}
let sayhello = greet("sarthak");
sayhello()

function reverseString(str){
    let reverse = "";
    for(let i = str.length -1;i >= 0;i--){
        reverse += str[i]
    }
    return reverse
}
console.log(reverseString("boB"))


function createCounter(){
    let count = 0;
    return{
    increment:function(){
        count++;
        console.log(count);
    },
    decrement:function(){
        count--;
        console.log(count);
    }
    
}
}

let countingStart = createCounter();

countingStart.increment();
countingStart.increment();
countingStart.decrement();


function outer(){
    let count = 0;
    return{ increment: function(){
        count++;
        console.log(count);
    },
    decrement: function(){
        count--;
        console.log(count);
    }
    }
}
let counter = outer();
counter.increment();
counter.increment();
counter.decrement();

function greet(name){
    console.log("hello " + name);
}
greet("sarthak");

function isStringpalindrome(str){
    let rev = "";
    rev = str.split("").reverse().join("");
    return rev === str;
}
console.log(isStringpalindrome("mom"))
console.log(isStringpalindrome("Mom"))//cause its capital;

function isStrPalidrome(str){
    let rev = "";
    for(let i = str.length -1;i >=0;i--){
        rev += str[i];
    }
    return rev === str;
}
console.log(isStrPalidrome("Mom"));
console.log(isStrPalidrome("non"));

console.log(x);
var x =10;

let str = "sarthak";
let reverse = "";
for(let i = str.length -1; i>=0;i--){
    reverse += str[i];
}
console.log(reverse);

reverse = str.split("").reverse().join("");
console.log(reverse);

let arr = [1,2,3,4,5,6];
let rev = [];
// rev = [...arr].reverse();
// console.log(rev)
for(let i = arr.length -1 ; i >= 0; i--){
    rev.push(arr[i]);
}
console.log(rev)

function prints(){
    for(let i= 0; i<3;i++){
        console.log(3)
    }
}
prints()

let add = (a,b) =>{
    return a+b;
}
console.log(add(2,2));

let multiply = (a,b)=>{
    return a*b;
}
console.log(multiply(5,2))


//Leetcode reverse number problem;
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x ===undefined || x===null) return false;
let str = x.toString()
let reversed = "";
for(let i =str.length-1;i >=0;i--){
    reversed += str[i]
}
return reversed ===str;
    };

console.log(isPalindrome(121));  // Output: true
console.log(isPalindrome(-121)); // Output: false

function print1to3(){
    for(let i =1; i <=3;i++){
        console.log(3)
    }
}

print1to3();

function revserseStr(str){
    let reverse ="";
    for(let i = str.length -1;i >= 0;i--){
        reverse += str[i];
    }
    return reverse;
}
console.log(revserseStr("kahtraS"));

let str = "kahtraS elabmoB";
let reverse = "";
reverse = str.split("").reverse().join("");
console.log(reverse);

let arr= [1,2,3,4,5,6,7];
let rev = [];
rev = [...arr].reverse();
console.log(rev);

let Arrayy = [9,8,7,6,5,4,3,2,1];
let reversed = [];
for(let i = Arrayy.length -1; i >= 0;i--){
    reversed.push(Arrayy[i]);
}


console.log(reversed);

function greet(name){
    return function(){
        console.log("Hello "+ name);
    }
}
let sayhello = greet("Sarthak");

sayhello();

function largest(arr){
    return Math.max(...arr);
}
console.log(largest([12,45,67,89]));

function biggestNumber(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length;i++){
        arr[i] > max;
        max = arr[i]
    }
    return max;
}

console.log(biggestNumber([12,45,56]));


