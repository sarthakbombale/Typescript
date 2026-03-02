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