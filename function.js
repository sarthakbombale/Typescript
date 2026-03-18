function add(a, b) {
    return a + b;
}
var sum = add(2, 4);
function sub(a, b) {
    return a - b;
}
var summ = sub(10, 5);
function double(a, b) {
    return a * b;
}
var multiply = double(10, 10);
function greet(name, msg) {
    if (msg === void 0) { msg = "padhai karo"; }
    return "".concat(name, " ").concat(msg);
}
console.log(greet("Sarthak"));
console.log(greet("hari"));
function logData(data) {
    console.log(data);
}
function throwError(msg) {
    throw new Error(msg);
}
var subb = function (a, b) { return a - b; };
function person(name, age, gender, address) {
    if (address === void 0) { address = "Pune"; }
    if (gender === undefined) {
        return "".concat(name, " from ").concat(address, " prefers not to say their gender.");
    }
    return "".concat(name, " is ").concat(gender, " lives in ").concat(address);
}
console.log(person("Sarthak", 21, "Male", "Mumbai"));
console.log(person("Ommi", 21, "other"));
