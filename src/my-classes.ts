const nameOfGame = "Fortnite";

/**
 * This is a class created by Soham Shinde for creating Fruit objects
 */

export class Fruit {
    name:String | undefined;
    color:String | undefined;

    // Parametereized Constructor
    constructor(nameParam: string, colorParam: string) {
        this.color = colorParam;
        this.name = nameParam;
    }

    public isRipe(): boolean {
        if(this.color == "Orange") {
            return true;
        } else {
            return false;
        }
    }
}


// console.log(banana.color);

// console.log(banana.isRipe());

export class Television {
    private power:boolean = false;
    protected modelName: string;
    protected adapter: string = "Double-Hook Charger";
    public deviceName: string | undefined;
    protected batteryType: string = "LITHIUM-ION FLASH";

    public constructor(modelNameParam: string) {
        this.modelName = modelNameParam;
        console.log("Calling televison constructor");
    }

    public changeDeviceName() {

    }

    public turnOn(): void {
        this.power = true;
    }

    public turnOff(): void {
        this.power = false;
    }

    public isTelevisonOnOrOff(): boolean {
        return this.power;
    }
}

// let televisonRemote:Television = new Television("Sony TV");
// televisonRemote.modelName; // modelName is public so it can be accessed
// televisonRemote.adapter; // ERROR: It is proctected and only acccesible within the class

// televisonRemote.turnOn();
// console.log(televisonRemote.isTelevisonOnOrOff());
// televisonRemote.turnOff();
// console.log(televisonRemote.isTelevisonOnOrOff());
//)____________________________________________________________________________________
