class Car {
    colour: string = "";
    fuelType: string = "";


    constructor(colourParam: string, fuelTypeParam: string) {
        this.colour = colourParam;
    }

    public toString() {
        console.log(this.colour);
    }
}

var car1: Car = new Car("red", "Gas");
var car2: Car = new Car("black", "Gas");
var car3: Car = new Car("black", "Gas");

var carArray: Array <Car> = [car1, car2, car3]

function isCarGas(car:Car): boolean {
    return car.fuelType == "Gas";
}

function isCarRed(car:Car): boolean {
   return car.colour == "red";
}


// console.log(carArray.every(isCarRed))

var redCarArray: Array <Car> = carArray.filter(isCarRed);

// console.log(redCarArray.length);
console.log(carArray.filter(isCarGas).length)