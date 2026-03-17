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