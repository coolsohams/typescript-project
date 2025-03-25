import { join } from "path"

//Interface
interface IShape {
    perimeter(perimeterParam: number): number
    area(areaParam: number): number
    sides(sidesParam: number): number
}

//Abstract Class
abstract class Shape implements IShape {
    perimeter(perimeterParam: number): number {
        return perimeterParam
    }

    area(areaParam: number): number {
        return areaParam
    }

    abstract sides(sidesParam: number): number
}

//Concrete Class
class Circle implements IShape {
    perimeter(perimeterParam: number): number {
        return perimeterParam
    }

    area(areaParam: number): number {
        return areaParam
    }

    sides(sidesParam: number): number {
        return sidesParam
    }
}
//_______________________________________________________________________________________________________________________________
interface IDevice {
    turnOn(): boolean;
    turnOff(): boolean;
    showSlogan(): string;
}

abstract class Television implements IDevice {
    private deviceName: string = '';

    constructor(deviceNameParam: string) {
        this.deviceName = deviceNameParam;
    }

    turnOn(): boolean {
        console.log(`Device ${this.deviceName} is turned on` );
        return true
    }

    turnOff(): boolean {
        console.log(`Device ${this.deviceName} is turned off` );
        return false;
    }

    abstract showSlogan(): string;
}

class LGTV extends Television {
    showSlogan(): string {
        return "LG - Life is Good";
    }

    turnOn(): boolean {
        // this.turnOn();
        // super.turnOn();
        console.log(this.showSlogan());
        return super.turnOn();
    }
}

class SmartLgTV extends LGTV {
    showSlogan(): string {
        return "LG - Life is Good";
    }

}

class SamsungTV extends Television {
    showSlogan(): string {
        return "Be Bold. Resonate with Soul";
    }

    turnOff(): boolean {
        console.log(this.showSlogan());
        return super.turnOff();
    }
}

let lgTv: Television = new LGTV('LG TV');
let samsungTv: Television = new SamsungTV('SAMSUNG TV');

//_______________________________________________________________________________________________________________________________
interface IInstruments {
    instrumentName: string;
    playSound(): void;
    volumeUp(): void;
    volumeDown(): void;
}

abstract class Piano implements IInstruments {
    abstract instrumentName: string;

    volumeUp(): void {
        console.log("Volume increased by 1 on piano.");
    }

    volumeDown(): void {
        console.log("Volume decreased by 1 on piano.");
    }

    abstract playSound(): void;
}

class GrandPiano extends Piano {
    instrumentName: string = "Casio Grand Piano"

    volumeUp(): void {
        console.log(`Volume increased by 1 on ${this.instrumentName}`);
    }

    volumeDown(): void {
        console.log(`Volume decreased by 1 on ${this.instrumentName}`);
    }

    playSound(): void {
        console.log(":Piano-Sounds:");
    }
}

class ElectricPiano extends Piano {
    instrumentName: string = "Casio Electric Piano"

    volumeUp(): void {
        console.log(`Volume increased by 1 on ${this.instrumentName}`);
    }

    volumeDown(): void {
        console.log(`Volume decreased by 1 on ${this.instrumentName}`);
    }

    playSound(): void {
        console.log(":Piano-Sounds:");
    }
}