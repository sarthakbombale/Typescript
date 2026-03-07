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