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
console.log(person("Sarthak", 21, "Male", "Pune"));
console.log(person("Ommi", 21, "Mithhu"));
function calculate(a, b, operation) {
    if (operation === void 0) { operation = "Add"; }
    if (operation === "multiply")
        return a * b;
    return a + b;
}
console.log(calculate(10, 5));
console.log(calculate(12, 5, "multiply"));
//rest operators 
function sums() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(arr);
}
sums(1, 2, 3, 4, 5, 6, 7, 8, 9);
function friends() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
}
friends("ommi", "Hari", "sujal");
function login(details) {
    console.log("Welcome back, ".concat(details.userName));
}
login({ userName: "Sarthak", email: "s@gmail.com", age: 21 });
var myCam = {
    brand: "Sony",
    resolution: 24,
    takePhoto: function () {
        console.log("Click! Photo taken.");
    }
};
var laptop = {
    name: "MacBook",
    price: 120000,
    warranty: "1 Year"
};
