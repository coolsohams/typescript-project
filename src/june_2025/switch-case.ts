export enum CarState {
    ON,
    OFF
}

export enum CarActions {
    ACCELERATION,
    BRAKE
}

export class Cars {
    private power: CarState | undefined;

    turnOnAndOffCar(powerParam:CarState | undefined) {
        this.power = powerParam;
        switch(powerParam) {
            case CarState.ON:
                console.log("Car has turned ON.");
                break;
            case CarState.OFF:
                console.log("Car is OFF.");
                break;
            default :
            console.log("Re-input ON or OFF in the parameter of function.");
            break;
        }
    }

    accelerateOrBreak(pedalPressedParam: CarActions | undefined) {
        switch(pedalPressedParam) {
            case CarActions.ACCELERATION:
                if (this.power == CarState.OFF) {
                    console.log("Turn ON car to ACCELERATE.");
                } else {
                    if (this.power != CarState.ON){
                        console.log("Re-input ON or OFF in the parameter of function.");
                        break;
                    }
                    console.log("Car is Accelerating.");
                }
                break;
            case CarActions.BRAKE:
                if (this.power == CarState.OFF) {
                    console.log("Turn ON car to BRAKE.");
                } else {
                    if (this.power != CarState.ON){
                        console.log("Re-input ON or OFF in the parameter of function.");
                        break;
                    }
                    console.log("Car is BRAKING.");
                };
                break;
            default:
                console.log("Unidentified action. Type ACCELERATION or BRAKE in the parameter of the function.");
        }
    }
}

// Example
var hondaCivic:Cars = new Cars();
hondaCivic.turnOnAndOffCar(CarState.ON);
hondaCivic.accelerateOrBreak(CarActions.ACCELERATION);