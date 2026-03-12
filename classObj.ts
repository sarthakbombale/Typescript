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