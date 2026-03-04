class Device {
    name = "Lg";
    price = 50;
    category = "digital"
}
let d1 = new Device();
let d2 = new Device();


class BottleMaker {
    constructor(public name: string, public price: number) { }
}
let b1 = new BottleMaker("Milton", 22)


class Fruits {
    constructor(public name: string, public price: number, public from: string) {

    }
}

let b3 = new Fruits("mango", 20, "ratnagi")
let b4 = new Fruits("Kiwi", 40, "meghalaya")



class students {
    constructor(public name: string, public rollNo: number, public age: number, public schollName: string) { }
}
let std = new students("hari", 6045, 5, "vidhya vikas mandir")
let std1 = new students("ommi", 6046, 3, "vidhya vikas mandir")
let std2 = new students("sujlya", 6047, 12, "vidhya vikas mandir")


class music {
    constructor(public name: string, public artist: string, public copyRights: boolean, public view: number, public company: string = "T-series") {

    }
}

let arjit = new music("arjit", "mainSinger", true, 2000000,)
let xxxTentation = new music("xxxTentation", "mainSinger", false, 9900000,)

// arjit.artist="sarthak"