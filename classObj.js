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
