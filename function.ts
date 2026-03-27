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
