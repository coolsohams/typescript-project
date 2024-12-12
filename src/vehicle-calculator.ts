interface IVehicleCalculator {
    getSpeed(distance: number, time: number): number;
    getDistance(speed: number, time:number): number;
    getTime(distance: number, speed: number): number;
}

export class VehicleCalculator implements IVehicleCalculator {

    getSpeed(distance: number, time: number): number {
        return distance / time;
    }

    getDistance(speed: number, time: number): number {
        return speed * time;
    }

    getTime(distance: number, speed: number): number {
        return distance / speed
    }
}
