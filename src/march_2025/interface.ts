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

//hello