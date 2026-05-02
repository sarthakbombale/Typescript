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