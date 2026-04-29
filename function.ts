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
