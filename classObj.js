// Access Modifiers
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GlassMaker = /** @class */ (function () {
    function GlassMaker(name) {
        this.name = name;
    }
    return GlassMaker;
}());
var mb = new GlassMaker("MB Shaker");
// Access Modifiers public & private
var Sports = /** @class */ (function () {
    function Sports(name) {
        this.name = name;
    }
    return Sports;
}());
var sp = new Sports("Boxing");
sp.name = "kickBoxing";
var BottleMaker1 = /** @class */ (function () {
    function BottleMaker1(name) {
        this.name = name;
    }
    BottleMaker1.prototype.changing = function () {
        this.name = "Hari";
    };
    return BottleMaker1;
}());
var z = new BottleMaker1("milton");
z.changing();
var ComputerMaker = /** @class */ (function () {
    function ComputerMaker() {
        this.name = "Acer";
    }
    return ComputerMaker;
}());
var LaptopMaker = /** @class */ (function (_super) {
    __extends(LaptopMaker, _super);
    function LaptopMaker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.material = "Fiber";
        return _this;
    }
    LaptopMaker.prototype.changename = function () {
        this.name = "HP";
    };
    return LaptopMaker;
}(ComputerMaker));
var laptop = new LaptopMaker();
laptop.material = "Carbon";
laptop.changename();
var Connection = /** @class */ (function () {
    // Parent constructor
    function Connection(status) {
        this.status = status;
    }
    Connection.prototype.disconnect = function () {
        this.status = "OFFLINE";
        console.log("Disconnected from server.");
    };
    return Connection;
}());
var VideoCall = /** @class */ (function (_super) {
    __extends(VideoCall, _super);
    function VideoCall(status, resolution) {
        var _this = _super.call(this, status) || this;
        _this.resolution = resolution;
        return _this;
    }
    VideoCall.prototype.showDetails = function () {
        console.log("Status: ".concat(this.status, ", Quality: ").concat(this.resolution));
    };
    return VideoCall;
}(Connection));
var myCall = new VideoCall("CONNECTED", "1080p");
myCall.showDetails();
var Video = /** @class */ (function () {
    function Video(title, duration) {
        this.title = title;
        this.duration = duration;
    }
    Video.prototype.play = function () {
        console.log("Playing: ".concat(this.title));
    };
    return Video;
}());
var LiveStream = /** @class */ (function (_super) {
    __extends(LiveStream, _super);
    function LiveStream(title, viewers) {
        var _this = _super.call(this, title, 0) || this;
        _this.viewers = viewers;
        return _this;
    }
    LiveStream.prototype.updateViewers = function (count) {
        this.viewers = count;
        console.log("".concat(this.title, " now has ").concat(this.viewers, " viewers."));
    };
    return LiveStream;
}(Video));
var myLive = new LiveStream("Typescript Mastery", 150);
myLive.play();
myLive.updateViewers(200);
var user = /** @class */ (function () {
    function user(id, name) {
        this.id = id;
        this.name = name;
        this.id = id;
        this.name = name;
    }
    return user;
}());
var users = new user(4, "harsh");
users.name = 'sarthak';
var cartoon = /** @class */ (function () {
    function cartoon(id, name, view) {
        this.id = id;
        this.name = name;
        this.view = view;
        this.id = id;
        this.name = name;
        this.view = view;
    }
    return cartoon;
}());
var doremon = new cartoon(1, "doremon", 67000000);
var sinchan = new cartoon(1, "sinchan", 70000000);
sinchan.name = "sinchan movie action kaminee";
var User = /** @class */ (function () {
    function User(_id, _name, _work, _salary) {
        this._id = _id;
        this._name = _name;
        this._work = _work;
        this._salary = _salary;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "work", {
        get: function () {
            return this._work;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.salary = function (value) {
        if (value <= 0) {
            console.log("salary can;t be 0 or negative");
        }
        else {
            this._salary = value;
        }
    };
    return User;
}());
var u = new User(1, "sarthak", "fulllstack developer", 200000);
u._work = "Mern Fulllstack developer";
u.salary(120000);
var SmartLight = /** @class */ (function () {
    function SmartLight(brand, brightness) {
        this.brand = brand;
        this.brightness = brightness;
    }
    SmartLight.prototype.adjustBrightness = function (level) {
        if (level >= 0 && level <= 100) {
            this.brightness = level;
            console.log("".concat(this.brand, " light set to ").concat(this.brightness, "%"));
        }
        else {
            console.log("Invalid brightness level!");
        }
    };
    return SmartLight;
}());
var hallLight = new SmartLight("Philips", 50);
hallLight.adjustBrightness(80);
var Character = /** @class */ (function () {
    function Character(name, health) {
        this.name = name;
        this.health = health;
    }
    return Character;
}());
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior(name, armor) {
        var _this = _super.call(this, name, 100) || this;
        _this.armor = armor;
        return _this;
    }
    Warrior.prototype.takeDamage = function (amount) {
        this.health -= (amount - this.armor);
        console.log("".concat(this.name, " health is now: ").concat(this.health));
    };
    return Warrior;
}(Character));
var thor = new Warrior("Thor", 10);
thor.takeDamage(30);
var Order = /** @class */ (function () {
    function Order(orderId, item, price) {
        this.orderId = orderId;
        this.item = item;
        this.price = price;
    }
    Order.prototype.applyDiscount = function (amount) {
        this.price -= amount;
        console.log("New price for ".concat(this.item, " is ").concat(this.price));
    };
    return Order;
}());
var myOrder = new Order("ORD123", "Laptop", 50000);
myOrder.applyDiscount(2000);
// myOrder.orderId = "ORD999"; // Error
var Album = /** @class */ (function () {
    function Album(title, artist) {
        this.title = title;
        this.artist = artist;
        this.songs = [];
    }
    Album.prototype.addSong = function (songName) {
        this.songs.push(songName);
    };
    Object.defineProperty(Album.prototype, "trackCount", {
        get: function () {
            return this.songs.length;
        },
        enumerable: false,
        configurable: true
    });
    return Album;
}());
var myAlbum = new Album("Evolution", "Sarthak");
myAlbum.addSong("TypeScript Blues");
myAlbum.addSong("Coding Night");
console.log(myAlbum.trackCount);
var Wallet = /** @class */ (function () {
    function Wallet(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    Wallet.prototype.sendMoney = function (amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds!");
        }
        else {
            this.balance -= amount;
            console.log("Sent ".concat(amount, ". Remaining: ").concat(this.balance));
        }
    };
    Object.defineProperty(Wallet.prototype, "currentBalance", {
        get: function () {
            return "Balance: ".concat(this.balance);
        },
        enumerable: false,
        configurable: true
    });
    return Wallet;
}());
var myWallet = new Wallet("Sarthak", 500);
myWallet.sendMoney(200);
console.log(myWallet.currentBalance);
var shape = /** @class */ (function () {
    function shape(color) {
        this.color = color;
    }
    shape.prototype.display = function () {
        console.log("this is the color of ".concat(this.color));
    };
    return shape;
}());
var pet = /** @class */ (function () {
    function pet(dogName, age) {
        this.dogName = dogName;
        this.age = age;
    }
    pet.prototype.sleep = function () {
        console.log("my name ".concat(this.dogName));
    };
    return pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("bhoooo bho");
    };
    return Dog;
}(pet));
var myDog = new Dog("dora", 4);
