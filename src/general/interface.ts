
export interface Vehicle {
    drive(): void;
}

export interface ICar extends Vehicle {
    color: string;
    vin: string;

    start(): void;
    stop(): void;
}

// let c: ICar = new ICar(); // WE can not create object of an Interface


export abstract class HondaCar implements ICar {
    hasMirrorCamera: boolean = true;
    color: string = "";
    vin: string = "";

    start(): void {
        console.log("Honda Car Started");
    }

    stop(): void {
        console.log("Honda Car Started");
    }

    abstract drive(): void;
    abstract hondaLinkConnect(): void;
}

class Civic extends HondaCar {

    constructor(hasMirrorCamera: boolean) {
        super();
        this.hasMirrorCamera = hasMirrorCamera;
    }

    drive(): void {
        console.log("Civic: drive.");
    }
    hondaLinkConnect(): void {
        console.log("Civic: hondaLinkConnect.");
    }

}

class Crv extends HondaCar {
    drive(): void {
        console.log("Crv: drive.");
    }
    hondaLinkConnect(): void {
        console.log("Crv: hondaLinkConnect");
    }
}

let civic: Civic = new Civic(true);






