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

function twoSum(nums: number[], target: number): number[] {
    const lookup: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in lookup) {
            return [lookup[complement], i];
        }
        lookup[nums[i]] = i;
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));


function groupAnagrams(words: string[]): string[][] {
    const cache: { [key: string]: string[] } = {};
    for (const word of words) {
        const sortedWord = word.split("").sort().join("");
        if (!cache[sortedWord]) {
            cache[sortedWord] = [];
        }
        cache[sortedWord].push(word);
    }
    return Object.values(cache);
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));


function lengthOfLongestSubstring(s: string): number {
    const seenChars = new Set<string>();
    let left = 0;
    let maxSize = 0;
    for (let right = 0; right < s.length; right++) {
        while (seenChars.has(s[right])) {
            seenChars.delete(s[left]);
            left += 1;
        }
        seenChars.add(s[right]);
        maxSize = Math.max(maxSize, right - left + 1);
    }
    return maxSize;
}
console.log(lengthOfLongestSubstring("abcabcbb"));


function mergeIntervals(intervals: number[][]): number[][] {
    if (intervals.length === 0) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    const merged: number[][] = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const lastMerged = merged[merged.length - 1];
        if (current[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            merged.push(current);
        }
    }
    return merged;
}
console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));


function maxSubArray(nums: number[]): number {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }
    return maxGlobal;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


function validParentheses(s: string): boolean {
    const stack: string[] = [];
    const mapping: { [key: string]: string } = { ")": "(", "}": "{", "]": "[" };
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in mapping) {
            const topElement = stack.length > 0 ? stack.pop() : '#';
            if (mapping[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
console.log(validParentheses("()[]{}"));


class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function reverseLinkedList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;
    while (curr) {
        const nextNode: ListNode | null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
}


function productExceptSelf(nums: number[]): number[] {
    const length = nums.length;
    const answer: number[] = new Array(length).fill(1);
    let leftProduct = 1;
    for (let i = 0; i < length; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }
    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    return answer;
}
console.log(productExceptSelf([1, 2, 3, 4]));


function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfitVal = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfitVal) {
            maxProfitVal = prices[i] - minPrice;
        }
    }
    return maxProfitVal;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));


function isPalindrome(s: string): boolean {
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
