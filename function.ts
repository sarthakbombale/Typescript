function add(a: number, b: number): number {
    return a + b;
}
const sum = add(2, 4);

function sub(a: number, b: number): number {
    return a - b;
}
const summ = sub(10, 5);

function double(a: number, b: number): number {
    return a * b
}
const multiply = double(10, 10)

function greet(name: string, msg: string = "padhai karo"): string {
    return `${name} ${msg}`
}
console.log(greet("Sarthak"))
console.log(greet("hari"))
function logData(data: string): void {
    console.log(data);
}

function throwError(msg: string): never {
    throw new Error(msg);
}


// Defining the "shape" of the function
type MathFunc = (a: number, b: number) => number;

const subb: MathFunc = (a, b) => a - b;

function person(name: string, age: number, gender?: string, address: string = "Pune") {
    if (gender === undefined) {
        return `${name} from ${address} prefers not to say their gender.`;
    }
    return `${name} is ${gender} lives in ${address}`

}
console.log(person("Sarthak", 21, "Male", "Pune"));

console.log(person("Ommi", 21, "Mithhu"));



function calculate(a: number, b: number, operation: string = "Add") {
    if (operation === "multiply") return a * b;
    return a + b
}

console.log(calculate(10, 5));
console.log(calculate(12, 5, "multiply"));


//rest operators 

function sums(...arr: Number[]) {
    console.log(arr)
}

sums(1, 2, 3, 4, 5, 6, 7, 8, 9)

function friends(...args: string[]) {
    console.log(args);
}
friends("ommi", "Hari", "sujal")


interface User {
    userName: string;
    email: string;
    age: number;
    isPremium?: boolean; 
}

function login(details: User) {
    console.log(`Welcome back, ${details.userName}`);
}

login({ userName: "Sarthak", email: "s@gmail.com", age: 21 });


interface Camera {
    brand: string;
    resolution: number;
    takePhoto(): void; 
}

const myCam: Camera = {
    brand: "Sony",
    resolution: 24,
    takePhoto() {
        console.log("Click! Photo taken.");
    }
};


interface Product {
    name: string;
    price: number;
}

interface Electronic extends Product {
    warranty: string;
}

const laptop: Electronic = {
    name: "MacBook",
    price: 120000,
    warranty: "1 Year"
};

interface SmartDevice {
    brand: string;
    turnOn(): void;
}

class Phone implements SmartDevice {
    constructor(public brand: string, public model: string) {}

    turnOn() {
        console.log(`${this.brand} ${this.model} is booting up...`);
    }
}

const myPhone = new Phone("iPhone", "15 Pro");
myPhone.turnOn();

interface ReadOnlyUser {
    readonly dbId: number;
    email: string;
    couponCode?: string;
}

const sarthak: ReadOnlyUser = {
    dbId: 9988,
    email: "s@test.com"
};

sarthak.email = "new@test.com";



// controller kind logics

enum Category{
    electronics ="electronics",
    clothing="clothing",
    food="food"
}


class createProduct{
    readonly title:string;
    readonly  price:number;
   readonly category :Category;
    
    constructor (
        title:string,price:number,category :Category
    ){this.title=title;
    this.price=price;
    this.category=category
}}
    
    const myitem = new createProduct("laptop Hp 12 gen",70000,Category.electronics)
     
     console.log(myitem)


          enum userRole{
         ADMIN="Admin",
         EDITOR="editor",
         VIEWER="Viewer"
     }
     
     class users{
         readonly userNames:string;
         readonly userRoles:userRole;
         readonly age:number
         
         constructor(userNames:string,userRoles:userRole,age:number){
             this.userNames=userNames;
             this.userRoles=userRoles;
             this.age=age
         }
     }
     
     const feed = new users("Sarthak",userRole.ADMIN,21);
     console.log(feed)
     

      enum Language{
     Python="python",
     Java="java",
     Javascript="javascript"
 }
 
 class learn{
 readonly name:string;
 readonly age:number;
 readonly address:string;
 readonly language:Language
 
 constructor(name:string,age:number,address:string,language:Language){
     this.name=name;
     this.age=age;
     this.address=address;
     this.language=language
 }
 }
 
 const study = new learn("sarthak bomble",21,"Pune",Language.Python)
 console.log(study);
 
 
 enum bike{
     Hero="hero",
     Apache="apache",
     Bullet="bulllet"
 };
 enum car{
     Alto="alto",
     Wagnor="wagnor",
     Swift="swift"
 }
 
 class Vehicle{
     readonly name:string;
     readonly type:bike | car;
     readonly km:number;
     
     constructor(name:string,type:bike | car,km:number){
         this.name=name;
         this.type=type;
         this.km=km;
     }
 }
 const drive = new Vehicle("Hari's Vehicle is",bike.Bullet,27)
 console.log(drive)
 
 

 class ProductService {
    saveProduct(data: any) {
        console.log("Saving to MongoDB...", data);
    }
}

class ProductController {
    
    constructor(private readonly productService: ProductService) {}


    create(body: CreateProductDto) {
        this.productService.saveProduct(body);
        return { message: "Product Created!", status: 201 };
    }
}

// Preparation for NestJS:
const service = new ProductService();
const controller = new ProductController(service);

// 'T' is a placeholder for any type
interface ApiResponse<T> {
    status: number;
    data: T;
    message: string;
}

const userResponse: ApiResponse<{name: string}> = {
    status: 200,
    data: { name: "Sarthak" },
    message: "Success"
};


interface User {
  id: number;
  name: string;
}


interface User {
  email: string;
}


const newUser: User = {
  id: 1,
  name: "Arjun",
  email: "arjun@example.com"
};

interface MyResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

function wrapData<T>(item: T): MyResponse<T> {
  return {
    success: true,
    data: item,
    message: "Operation successful",
  };
}

const stringRes = wrapData("User Created");
const userRes = wrapData({ id: 1, name: "Sarthak" });


interface UserProfile {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
  bio: string;
}


type PublicProfile = Omit<UserProfile, "passwordHash">;

type UpdatePayload = Partial<PublicProfile>;

function updateMyUser(id: string, changes: UpdatePayload) {
  console.log(`Updating user ${id} with:`, changes);
}

updateMyUser("123", { bio: "Updated my bio!" });


enum UserRole {
    ADMIN = "ADMIN",
    EDITOR = "EDITOR",
    GUEST = "GUEST"
}

interface User {
    username: string;
    role: UserRole; // Now only the 3 options above are allowed
}

const myUser: User = {
    username: "sarthak",
    role: UserRole.ADMIN // Safe and no typos!
};

// 1. Enum for fixed choices
enum ApiStatus {
    SUCCESS = "success",
    ERROR = "error",
    LOADING = "loading"
}

// 2. Base Interface (The "Rulebook")
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

// 3. Utility Type: Partial (For Updates)
// This makes all Product fields optional so we can update just the price
type ProductUpdateDto = Partial<Product>;

// 4. Generic Interface (The "Universal Wrapper")
// T can be anything (a User, a Product, or an Array)
interface ApiResponse<T> {
    status: ApiStatus;
    data: T;
    message: string;
}

// 5. The Function
function updateProduct(id: number, changes: ProductUpdateDto): ApiResponse<ProductUpdateDto> {
    // Logic would go here (e.g., Database update)
    console.log(`Updating product ${id} with changes:`, changes);

    return {
        status: ApiStatus.SUCCESS,
        data: changes,
        message: "Product updated successfully!"
    };
}

// --- TESTING THE CODE ---
const myChanges: ProductUpdateDto = { price: 999 }; // Only updating price
const result = updateProduct(101, myChanges);

console.log(result);

function reverseString(text: string): string {
    return text.split("").reverse().join("");
}

console.log(reverseString("Sarthak")); 




function isPalindrome(word: string): boolean {

    const reversed = word.split("").reverse().join("");

    return word.toLowerCase() === reversed.toLowerCase();

}



console.log(isPalindrome("Racecar")); // true

console.log(isPalindrome("Hello"));   // false

function printChars(text: string): void {

    for (const char of text) {

        console.log(`Character: ${char}`);

    }

}



printChars("NestJS");



// 1. Define the user interface
interface User {
  id: number;
  name: string;
  role: 'admin' | 'user' | 'guest';
  status: 'active' | 'inactive';
}

// 2. Complete this generic class
class ApiResponseProcessor<T> {
  private data: T[];

  constructor(data: T[]) {
    this.data = data;
  }


  
  filterByProperty<K extends keyof T>(key: K, value: T[K]): T[] {
    return this.data.filter(item => item[key] === value);
  }


  pluck<K extends keyof T>(key: K): T[K][] {
    return this.data.map(item => item[key]);
  }
}

  

interface User {
    id: number;
    name: string;
}

// Custom Type Guard function
function isUser(data: any): data is User {
    return data && typeof data.id === "number" && typeof data.name === "string";
}

// Usage in API handler
function handleResponse(response: unknown) {
    if (isUser(response)) {
        console.log("Welcome,", response.name.toUpperCase()); // Safe to use!
    } else {
        console.error("Invalid user data structure");
    }
}

function updateProduct(id: number, changes: ProductUpdateDto): ApiResponse<ProductUpdateDto> {
    // Logic would go here (e.g., Database update)
    console.log(`Updating product ${id} with changes:`, changes);

    return {
        status: ApiStatus.SUCCESS,
        data: changes,
        message: "Product updated successfully!"
    };
}

// --- TESTING THE CODE ---
const myChanges: ProductUpdateDto = { price: 999 }; // Only updating price
const result = updateProduct(101, myChanges);

console.log(result);

function reverseString(text: string): string {
    return text.split("").reverse().join("");
}

console.log(reverseString("Sarthak")); 




function isPalindrome(word: string): boolean {

    const reversed = word.split("").reverse().join("");

    return word.toLowerCase() === reversed.toLowerCase();

}



console.log(isPalindrome("Racecar")); // true

function greetUser(username: string, role: string = "guest"): string {
    return `User ${username} logged in with role: ${role}`;
}
console.log(greetUser("Sarthak", "admin"));
console.log(greetUser("Harry"));


function formatInvoice(amount: number, currency: string = "INR"): string {
    return `${currency} ${amount.toFixed(2)}`;
}
console.log(formatInvoice(1500));
console.log(formatInvoice(49.99, "USD"));


function processPayment(userId: string | number, amount: number): boolean {
    if (amount <= 0) {
        return false;
    }
    return true;
}
console.log(processPayment("usr_101", 250));
console.log(processPayment(404, -10));


type Callback = (id: string) => void;

function fetchUserData(userId: string, onSuccess: Callback): void {
    onSuccess(userId);
}
fetchUserData("1024", (id) => console.log(`Data synced for ID: ${id}`));


function calculateTotal(...prices: number[]): number {
    return prices.reduce((sum, current) => sum + current, 0);
}
console.log(calculateTotal(10, 20, 30, 40));
console.log(calculateTotal(99, 1));

interface DatabaseUser {
    id: string;
    email: string;
    role: "admin" | "manager" | "employee";
    isActive: boolean;
}

interface AuditLog {
    timestamp: string;
    actorId: string;
    action: string;
    status: "success" | "failed";
}

function processUserAccessControl(
    user: DatabaseUser, 
    requiredRoles: string[], 
    systemLogs: AuditLog[]
): { authorized: boolean; logEntry: AuditLog } {
    const timestamp = new Date().toISOString();
    
    if (!user.isActive) {
        const failedLog: AuditLog = { timestamp, actorId: user.id, action: "LOGIN_ATTEMPT", status: "failed" };
        systemLogs.push(failedLog);
        return { authorized: false, logEntry: failedLog };
    }

    const hasRole = requiredRoles.includes(user.role);
    const status = hasRole ? "success" : "failed";
    const logEntry: AuditLog = { timestamp, actorId: user.id, action: "ACCESS_DASHBOARD", status };
    
    systemLogs.push(logEntry);
    return { authorized: hasRole, logEntry };
}


interface InventoryItem {
    sku: string;
    price: number;
    quantity: number;
    category: string;
}

interface CartItem {
    sku: string;
    qtyOrdered: number;
}

interface InvoiceSummary {
    subtotal: number;
    tax: number;
    discount: number;
    total: number;
    errors: string[];
}

function generateOrderInvoice(
    cart: CartItem[], 
    inventory: Map<string, InventoryItem>, 
    taxRate: number, 
    couponCode?: string
): InvoiceSummary {
    let subtotal = 0;
    const errors: string[] = [];

    for (const item of cart) {
        const invItem = inventory.get(item.sku);
        if (!invItem) {
            errors.push(`SKU ${item.sku} not found in inventory.`);
            continue;
        }
        if (invItem.quantity < item.qtyOrdered) {
            errors.push(`Insufficient stock for SKU ${item.sku}. Available: ${invItem.quantity}`);
            continue;
        }
        subtotal += invItem.price * item.qtyOrdered;
    }

    let discount = 0;
    if (couponCode === "SAVE20" && subtotal > 100) {
        discount = subtotal * 0.20;
    }

    const taxableAmount = subtotal - discount;
    const tax = taxableAmount * (taxRate / 100);
    const total = taxableAmount + tax;

    return { subtotal, tax, discount, total, errors };
}


interface PaginatedRequest {
    page: number;
    limit: number;
    sortBy: string;
    order: "asc" | "desc";
}

interface ApiResponse<T> {
    statusCode: number;
    data: T[];
    meta: {
        totalRecords: number;
        totalPages: number;
        currentPage: number;
    };
}

function fetchPaginatedData<T>(
    dataSource: T[], 
    config: PaginatedRequest
): ApiResponse<T> {
    const sortedData = [...dataSource].sort((a: any, b: any) => {
        if (a[config.sortBy] < b[config.sortBy]) return config.order === "asc" ? -1 : 1;
        if (a[config.sortBy] > b[config.sortBy]) return config.order === "asc" ? 1 : -1;
        return 0;
    });

    const startIndex = (config.page - 1) * config.limit;
    const endIndex = startIndex + config.limit;
    const paginatedData = sortedData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(dataSource.length / config.limit);

    return {
        statusCode: 200,
        data: paginatedData,
        meta: {
            totalRecords: dataSource.length,
            totalPages,
            currentPage: config.page
        }
    };
}


interface SensorPayload {
    deviceId: string;
    temperature: number;
    humidity: number;
    statusCodes: number[];
}

interface DeviceDiagnosticReport {
    deviceId: string;
    isHealthy: boolean;
    averages: { temp: number; humid: number };
    criticalAlerts: string[];
}

function processTelemetryBatch(
    payloads: SensorPayload[], 
    tempThreshold: number
): DeviceDiagnosticReport[] {
    const groupings: { [key: string]: SensorPayload[] } = {};

    for (const payload of payloads) {
        if (!groupings[payload.deviceId]) {
            groupings[payload.deviceId] = [];
        }
        groupings[payload.deviceId].push(payload);
    }

    const reports: DeviceDiagnosticReport[] = [];

    for (const deviceId in groupings) {
        const devicePayloads = groupings[deviceId];
        let totalTemp = 0;
        let totalHumid = 0;
        const alerts: string[] = [];

        for (const p of devicePayloads) {
            totalTemp += p.temperature;
            totalHumid += p.humidity;
            if (p.temperature > tempThreshold) {
                alerts.push(`Critical temperature warning: ${p.temperature}°C`);
            }
            if (p.statusCodes.includes(500)) {
                alerts.push("Internal hardware state error detected.");
            }
        }

        const avgTemp = totalTemp / devicePayloads.length;
        const avgHumid = totalHumid / devicePayloads.length;

        reports.push({
            deviceId,
            isHealthy: alerts.length === 0,
            averages: { temp: avgTemp, humid: avgHumid },
            criticalAlerts: alerts
        });
    }

    return reports;
}


interface NetworkNode {
    id: string;
    connections: string[];
}

function findShortestNetworkPath(
    graph: Map<string, NetworkNode>, 
    startNodeId: string, 
    endNodeId: string
): string[] | null {
    if (!graph.has(startNodeId) || !graph.has(endNodeId)) return null;

    const queue: string[] = [startNodeId];
    const visited = new Set<string>([startNodeId]);
    const parentMap = new Map<string, string>();

    while (queue.length > 0) {
        const currentId = queue.shift()!;

        if (currentId === endNodeId) {
            const path: string[] = [];
            let curr: string | undefined = endNodeId;
            while (curr) {
                path.push(curr);
                curr = parentMap.get(curr);
            }
            return path.reverse();
        }

        const node = graph.get(currentId);
        if (node) {
            for (const neighbor of node.connections) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    parentMap.set(neighbor, currentId);
                    queue.push(neighbor);
                }
            }
        }
    }

    return null;
}


console.log(isPalindrome("Hello"));   // false

function printChars(text: string): void {

    for (const char of text) {

        console.log(`Character: ${char}`);

    }

}



printChars("NestJS");

interface KeyValueMap {
    [key: string]: number;
}

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
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
    const set = new Set<string>();
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


type NestedArray<T> = Array<T | NestedArray<T>>;

function flattenArray<T>(arr: NestedArray<T>): T[] {
    let result: T[] = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    }
    return result;
}
console.log(flattenArray([1, [2, [3, 4], 5], 6]));


function findMissingNumber(nums: number[]): number {
    const n = nums.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
    for (const num of nums) {
        actualSum += num;
    }
    return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 4, 5, 6]));

interface UserProfile {
    id: number;
    username: string;
    role: "admin" | "user";
}

function fetchUserRole(user: UserProfile): string {
    if (user.role === "admin") {
        return "Access level: Full Console Access";
    }
    return "Access level: Limited Viewer Access";
}
console.log(fetchUserRole({ id: 101, username: "sarthak_dev", role: "admin" }));


type APIResponse<T> = {
    status: "success" | "error";
    data: T;
    code: number;
};

function handleApiResponse<T>(response: APIResponse<T>): T | string {
    if (response.code === 200) {
        return response.data;
    }
    return "Error: System failed to fetch records.";
}
console.log(handleApiResponse({ status: "success", data: ["item1", "item2"], code: 200 }));


interface OperationalConfig {
    readonly apiKey: string;
    endpoints: string[];
    timeout?: number;
}

function initializeSystem(config: OperationalConfig): string {
    const timeLimit = config.timeout ?? 30;
    return `System loaded with API key reference using ${timeLimit}s fallback delay.`;
}
console.log(initializeSystem({ apiKey: "secret_abc123", endpoints: ["/v1/status"] }));


type SuccessState = { status: "success"; records: string[] };
type ErrorState = { status: "error"; message: string };
type NetworkState = SuccessState | ErrorState;

function renderNetworkUI(state: NetworkState): string {
    switch (state.status) {
        case "success":
            return `Render items count: ${state.records.length}`;
        case "error":
            return `Alert dialogue error box: ${state.message}`;
    }
}
console.log(renderNetworkUI({ status: "success", records: ["user1", "user2"] }));


function extractObjectKeys<T extends object, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key]);
}
const productData = { sku: "LAP-102", price: 1200, stock: 45 };
console.log(extractObjectKeys(productData, ["price", "stock"]));

function greet(name: string): string {
    return `Hello, ${name}`;
}
console.log(greet("Sarthak"));


interface User {
    id: number;
    email: string;
}
function processUser(user: User): string {
    return `Processing ${user.email}`;
}
console.log(processUser({ id: 1, email: "test@email.com" }));


type Status = "pending" | "approved" | "rejected";
function updateStatus(current: Status): Status {
    if (current === "pending") {
        return "approved";
    }
    return current;
}
console.log(updateStatus("pending"));


class Car {
    constructor(public brand: string, private speed: number) {}
    getSpeed(): number {
        return this.speed;
    }
}
const myCar = new Car("Tesla", 120);
console.log(myCar.getSpeed());


function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<number>(42));


interface Dimensions {
    width: number;
    height: number;
}
function calculateArea(rect: Dimensions): number {
    return rect.width * rect.height;
}
console.log(calculateArea({ width: 10, height: 5 }));


type ApiResponse<T> = {
    data: T;
    success: boolean;
};
const response: ApiResponse<string[]> = {
    data: ["item1", "item2"],
    success: true
};
console.log(response.data);


function printLog(message: string, prefix?: string): void {
    console.log(`${prefix ?? "LOG"}: ${message}`);
}
printLog("System initialized");


enum Role {
    Admin,
    User,
    Guest
}
function checkPermission(role: Role): boolean {
    return role === Role.Admin;
}
console.log(checkPermission(Role.Admin));


type Point = { x: number; y: number };
function movePoint(p: Point, dx: number, dy: number): Point {
    return { x: p.x + dx, y: p.y + dy };
}
console.log(movePoint({ x: 0, y: 0 }, 5, 10));

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
