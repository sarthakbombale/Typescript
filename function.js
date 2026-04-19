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
var Phone = /** @class */ (function () {
    function Phone(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    Phone.prototype.turnOn = function () {
        console.log("".concat(this.brand, " ").concat(this.model, " is booting up..."));
    };
    return Phone;
}());
var myPhone = new Phone("iPhone", "15 Pro");
myPhone.turnOn();
var sarthak = {
    dbId: 9988,
    email: "s@test.com"
};
sarthak.email = "new@test.com";
// controller kind logics
var Category;
(function (Category) {
    Category["electronics"] = "electronics";
    Category["clothing"] = "clothing";
    Category["food"] = "food";
})(Category || (Category = {}));
var createProduct = /** @class */ (function () {
    function createProduct(title, price, category) {
        this.title = title;
        this.price = price;
        this.category = category;
    }
    return createProduct;
}());
var myitem = new createProduct("laptop Hp 12 gen", 70000, Category.electronics);
console.log(myitem);
var userRole;
(function (userRole) {
    userRole["ADMIN"] = "Admin";
    userRole["EDITOR"] = "editor";
    userRole["VIEWER"] = "Viewer";
})(userRole || (userRole = {}));
var users = /** @class */ (function () {
    function users(userNames, userRoles, age) {
        this.userNames = userNames;
        this.userRoles = userRoles;
        this.age = age;
    }
    return users;
}());
var feed = new users("Sarthak", userRole.ADMIN, 21);
console.log(feed);
var Language;
(function (Language) {
    Language["Python"] = "python";
    Language["Java"] = "java";
    Language["Javascript"] = "javascript";
})(Language || (Language = {}));
var learn = /** @class */ (function () {
    function learn(name, age, address, language) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.language = language;
    }
    return learn;
}());
var study = new learn("sarthak bomble", 21, "Pune", Language.Python);
console.log(study);
var bike;
(function (bike) {
    bike["Hero"] = "hero";
    bike["Apache"] = "apache";
    bike["Bullet"] = "bulllet";
})(bike || (bike = {}));
;
var car;
(function (car) {
    car["Alto"] = "alto";
    car["Wagnor"] = "wagnor";
    car["Swift"] = "swift";
})(car || (car = {}));
var Vehicle = /** @class */ (function () {
    function Vehicle(name, type, km) {
        this.name = name;
        this.type = type;
        this.km = km;
    }
    return Vehicle;
}());
var drive = new Vehicle("Hari's Vehicle is", bike.Bullet, 27);
console.log(drive);
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.saveProduct = function (data) {
        console.log("Saving to MongoDB...", data);
    };
    return ProductService;
}());
var ProductController = /** @class */ (function () {
    function ProductController(productService) {
        this.productService = productService;
    }
    ProductController.prototype.create = function (body) {
        this.productService.saveProduct(body);
        return { message: "Product Created!", status: 201 };
    };
    return ProductController;
}());
// Preparation for NestJS:
var service = new ProductService();
var controller = new ProductController(service);
var userResponse = {
    status: 200,
    data: { name: "Sarthak" },
    message: "Success"
};
var newUser = {
    id: 1,
    name: "Arjun",
    email: "arjun@example.com"
};
