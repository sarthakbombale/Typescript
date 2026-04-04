let tupleArr: [string, boolean] = ["hari", false]

enum UserRoles {
    ADMIN = "hari",
    GUEST = "OMMI",
    ROLLNO = 12
}

UserRoles.ROLLNO

// type Infernce
//type annotations

let num: number = 23;
let greeting: 'hello' = 'hello';


// Interfaces and tpyes alises
// Defining interfaces
//Intersection  types

interface User {
    name: string,
    email: string,
    password: string,
    gender?: string
}

function validateUser(obje: User) {

}
validateUser({ name: "harsh", email: "email@gmail.com", password: "123456" })

interface home {
    name: string,
    id: number,
    age: number,
    gender?: string
}

function home(obj: home) {
    obj.gender
}

interface cat {
    name: string,
    age: number,
    weight: number,
    gender?: string
}

function cat(obj: home) {
    obj.id
}



interface info {
    name: string;
    age: number;
    address: string;
}

function validate(data: info) {
    return `Name:${data.name}, Age:${data.age} ,Adress${data.address}`
}

const user = ({ name: "sarthak", age: 21, address: "Pune" })

console.log(validate(user));


interface authentication {
    name: string;
    age: number;
    email: string;
}

function login(data: authentication) {
    return `hello my name is ${data.name}  & i am ${data.age} year old contact me on ${data.email}`
}

const contact = ({ name: "hari", age: 20, email: "hari@gmail.com" })
console.log(login(contact))


interface student {
    name: string;
    age: number;
    RollNo?: number;
}

function std(data: student) {
    if (data.RollNo) {
        return `hello here is std data name of student is  ${data.name} & age is ${data.age} & there RollNo is ${data.RollNo} `
    }
    return `hello here is std data name of student is  ${data.name} & age is ${data.age} & there RollNo is not assined yet`
}
const std1 = ({ name: "rahul", age: 12, RollNo: 1 });
const std2 = ({ name: "sujal", age: 21 });

console.log(std(std1));
console.log(std(std2));
//Extending interfaces

interface admin {
    character: string,
    letter: string
    points: number
}

interface meow extends User {
    meow: string
}

function meow(obj: meow) {
    obj.meow;
}

interface ABCD {
    name: string
}
interface ABCD {
    hehe: string
}
function ABCD(obj: ABCD) {
    obj.hehe
}

interface Admin {
    name: string;
    roles: string;
}
interface User extends Admin {
    duty: string;
}

function dashboard(data: User) {
    return `${data.name}, ${data.roles} , ${data.duty}`
}
const users = ({ name: "Ramu", roles: "houseKeeping", duty: "nightShift" })
console.log(dashboard(users))

//Type aliases
type sankhya = number;
let a1: sankhya;

type value = string | null | number;
let a2: value;

function func(obj: value) {

}
func(34)


type value1 = boolean | string | null | number;

let a3: value1;
function func1(obj: value1) {
    func1(true)
}
func1(false)
func1(23)


//intersection types 

type user1 = {
    nav: string,
    adrress: string
}

type admin1 = user1 & {
    getdetails(age: number): void
}
function info(obj: admin1) {
    obj.getdetails;
}

type user2 = {
    names: string,
    numbers: number,
    attendence: string
}

type admin2 = user2 & {
    getInfo(ages: number): void
}

function gettingInfo(params: admin2) {
    params.getInfo
    params.attendence
}



// 1. Enum for fixed categories
enum PaymentStatus {
    PENDING = "PENDING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED"
}

// 2. Base Interface (The Blueprint)
interface BaseTransaction {
    id: string;
    amount: number;
    status: PaymentStatus;
}

// 3. Specific Interfaces extending the base
interface CryptoPayment extends BaseTransaction {
    walletAddress: string;
    currency: "BTC" | "ETH" | "SOL"; // Union of literal strings
}

interface CardPayment extends BaseTransaction {
    cardNumber: number;
    expiryDate: string;
}

// 4. Intersection Type: Creating a "Receipt" by combining types
type ReceiptInfo = {
    issuedAt: Date;
    tax: number;
};

type FullReceipt = BaseTransaction & ReceiptInfo;

// 5. Function using a 
// Accepts either Crypto or Card)
function processPayment(payment: CryptoPayment | CardPayment) {
    console.log(`Processing ID: ${payment.id}...`);

    // Logic check
    if (payment.status === PaymentStatus.PENDING) {
        console.log("Transaction is still processing.");
    }
}

// --- TESTING THE CODE ---
const mySale: CryptoPayment = {
    id: "TXN_101",
    amount: 500,
    status: PaymentStatus.SUCCESS,
    walletAddress: "0xABC123",
    currency: "ETH" // Try changing this to "USD" to see the error!
};

processPayment(mySale);