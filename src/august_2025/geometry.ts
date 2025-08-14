interface IShape {
    calculatePerimeter() : number;
    calculateArea() : number | null;
}

interface I3DShape {
    calculateVolume(): number | null;
    calculateSurfaceArea(): number;
}

class Square implements IShape {
    lengthVariable: number = 0;

    constructor(lengthParam: number) {
        this.lengthVariable = lengthParam;
    }

    calculatePerimeter(): number {
        return this.lengthVariable * 4;
    }

    calculateArea(): number | null {
        return this.lengthVariable * this.lengthVariable;
    }
}

class Rectangle implements IShape {
    lengthVariable: number = 0;
    width: number = 0;

    constructor(lenghtParam: number, widthParam: number) {
        this.lengthVariable = lenghtParam;
        this.width = widthParam;
    }

    calculatePerimeter(): number {
        return (this.lengthVariable * 2) + (this.width * 2)
    }

    calculateArea(): number | null {
        return this.lengthVariable * this.width;
    }
}

class Triangle implements IShape {
    base: number = 0;
    height: number = 0;
    sideA: number = 0;
    sideB: number = 0;

    constructor(baseParam: number, heightParam: number, sideAParam: number, sideBParam: number) {
        this.base = baseParam;
        this.height = heightParam;
        if(sideAParam){
            this.sideA = sideAParam;
        }
        if(sideBParam) {
            this.sideB = sideBParam;
        }
    }

    calculatePerimeter(): number {
        return this.base + this.sideA + this.sideB;
    }

    calculateArea(): number | null {
        return (this.base * this.height) / 2;
    }
}

class Cube implements I3DShape {
    edgeLength: number = 0;

    constructor(edgeLengthParam: number) {
        this.edgeLength = edgeLengthParam;
    }

    calculateVolume(): number {
        return this.edgeLength * this.edgeLength * this.edgeLength;
    }

    calculateSurfaceArea(): number {
        return (this.edgeLength * 2) * 6;
    }
}

class RectangularPrism implements I3DShape {
    base: number = 0;
    height: number = 0;
    base2: number = 0;

    constructor(baseParam: number, base2Param: number, heightParam: number) {
        this.base = baseParam;
        this.base2 = base2Param;
        this.height = heightParam;
    }

    calculateSurfaceArea(): number {
        return (this.base * this.height) * 2 + (this.height * this.base2) * 2 + (this.base * this.base2) * 2;
    }

    calculateVolume(): number | null {
        return this.base * this.base2 * this.height;
    }
}

let squareObject: Square = new Square(4);
let rectangleObject: Rectangle = new Rectangle(2, 5);
let triangleObject: Triangle = new Triangle(2,2,4,4);
let cubeObject: Cube = new Cube(2);
let prismObject: RectangularPrism = new RectangularPrism(4,6,2);

console.log(prismObject.calculateSurfaceArea());

