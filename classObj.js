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
