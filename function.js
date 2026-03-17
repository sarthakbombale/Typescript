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
