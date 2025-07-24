interface ICalculator {
    add(input1: any, input2: any): any;
    substract(input1: number, input2: number): any;
    multiply(input1: number, input2: number): any;
    divide(input1: number, input2: number): any;
}


abstract class AbstractCalculator implements ICalculator {
    substract(input1: number, input2: number): any {
        return input1 - input2;
    }

    multiply(input1: number, input2: number): any {
        return input1 * input2;
    }

    divide(input1: number, input2: number): any {
        return input1 / input2;
    }

    abstract add(input1: any, input2: any): any;
}

export class NumCalculator extends AbstractCalculator {
    add(input1: any, input2: any): any {
        return input1 + input2;
    }
}

export class StrCalculator extends AbstractCalculator {
    add(input1: any, input2: any) {
        return input1 + input2;
    }

    substract(input1: number, input2: number): any {
        console.log("Function not allowed.");
        return null;
    }

    multiply(input1: number, input2: number): null {
        console.log("Function not allowed")
        return null;
    }

    divide(input1: number, input2: number): null {
        console.log("Function not allowed")
        return null;
    }

}
