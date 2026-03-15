// Access Modifiers

class GlassMaker {
    constructor(private name: string) {

    }
}
let mb = new GlassMaker("MB Shaker")

// Access Modifiers public & private

class Sports {
    constructor(public name: string) { }
}

let sp = new Sports("Boxing")
sp.name = "kickBoxing"

class BottleMaker1 {

    constructor(private name: string) { }

    changing() {
        this.name = "Hari";
    }
}

let z = new BottleMaker1("milton");
z.changing();

class ComputerMaker {
    protected name = "Acer"; \
}

class LaptopMaker extends ComputerMaker {
    public material = "Fiber";

    changename() {
        this.name = "HP";
    }
}

let laptop = new LaptopMaker();

laptop.material = "Carbon";
laptop.changename();

class Connection {
    // Parent constructor
    constructor(protected status: string) { }

    disconnect() {
        this.status = "OFFLINE";
        console.log("Disconnected from server.");
    }
}

class VideoCall extends Connection {

    constructor(status: string, public resolution: string) {
        super(status);
    }

    showDetails() {
        console.log(`Status: ${this.status}, Quality: ${this.resolution}`);
    }
}

const myCall = new VideoCall("CONNECTED", "1080p");
myCall.showDetails();

class Video {
    constructor(
        public title: string,
        protected duration: number
    ) { }

    play() {
        console.log(`Playing: ${this.title}`);
    }
}

class LiveStream extends Video {
    constructor(title: string, public viewers: number) {
        super(title, 0);
    }

    updateViewers(count: number) {
        this.viewers = count;
        console.log(`${this.title} now has ${this.viewers} viewers.`);
    }
}

const myLive = new LiveStream("Typescript Mastery", 150);
myLive.play();
myLive.updateViewers(200);



class user {

    constructor(public readonly id: number, public name: string) {
        this.id = id;
        this.name = name;
    }

}

const users = new user(4, "harsh");
users.name = 'sarthak';


class cartoon {
    constructor(public readonly id: number, public name: string, public readonly view: number) {
        this.id = id;
        this.name = name;
        this.view = view;
    }
}

let doremon = new cartoon(1, "doremon", 67000000);
let sinchan = new cartoon(1, "sinchan", 70000000);

sinchan.name = "sinchan movie action kaminee"


class User {
    constructor(public _id: number, public _name: string, public _work?: string, private _salary: number) { }


    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get work() {
        return this._work
    }

    salary(value: number) {
        if (value <= 0) {
            console.log("salary can;t be 0 or negative")
        } else {
            this._salary = value;
        }
    }
}

let u = new User(1, "sarthak", "fulllstack developer", 200000);
u._work = "Mern Fulllstack developer";
u.salary(120000);


class SmartLight {
    constructor(public brand: string, private brightness: number) {}

    adjustBrightness(level: number) {
        if (level >= 0 && level <= 100) {
            this.brightness = level;
            console.log(`${this.brand} light set to ${this.brightness}%`);
        } else {
            console.log("Invalid brightness level!");
        }
    }
}

let hallLight = new SmartLight("Philips", 50);
hallLight.adjustBrightness(80);

class Character {
    constructor(public name: string, protected health: number) {}
}

class Warrior extends Character {
    constructor(name: string, public armor: number) {
        super(name, 100);
    }

    takeDamage(amount: number) {
        this.health -= (amount - this.armor);
        console.log(`${this.name} health is now: ${this.health}`);
    }
}

let thor = new Warrior("Thor", 10);
thor.takeDamage(30);



class Order {
    constructor(
        public readonly orderId: string,
        public item: string,
        private price: number
    ) {}

    applyDiscount(amount: number) {
        this.price -= amount;
        console.log(`New price for ${this.item} is ${this.price}`);
    }
}

let myOrder = new Order("ORD123", "Laptop", 50000);
myOrder.applyDiscount(2000);
// myOrder.orderId = "ORD999"; // Error


class Album {
    private songs: string[] = [];

    constructor(public readonly title: string, public artist: string) {}

    addSong(songName: string) {
        this.songs.push(songName);
    }

    get trackCount() {
        return this.songs.length;
    }
}

let myAlbum = new Album("Evolution", "Sarthak");
myAlbum.addSong("TypeScript Blues");
myAlbum.addSong("Coding Night");
console.log(myAlbum.trackCount);


class Wallet {
    constructor(public owner: string, private balance: number) {}

    sendMoney(amount: number) {
        if (amount > this.balance) {
            console.log("Insufficient funds!");
        } else {
            this.balance -= amount;
            console.log(`Sent ${amount}. Remaining: ${this.balance}`);
        }
    }

    get currentBalance() {
        return `Balance: ${this.balance}`;
    }
}

let myWallet = new Wallet("Sarthak", 500);
myWallet.sendMoney(200);
console.log(myWallet.currentBalance);