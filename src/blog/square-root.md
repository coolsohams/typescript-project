- Title
- Introduction
- Steps by Steps Explanation with Code Example
- Link to the code repository

# How to calculate Square Root using TypeScript
In this blog I am going to explain you about the code I made to calculate Sqaure Root using the **Long Division Method** with TypeScript.



## What is square root?
Square root is a mathamatical operation to find a number which when multiplied my itself gives a number close to or equal to a number you want to calculate the square root of. 

## How to calculate square root using the `Long Division method`?


**Step #1**: Make the number you want to calculate the square root of in pairs starting from right to left. If a number is singled out, consider that single number as a pair.

**Step #2**: Find a number whose square is less than or equal to the leftmost pair and use that as a divisor for the leftmost pair.

**Step #3**: Here are steps to find a new dividend and divisor.

- In order to get a new divisor, we need to find the first set of numbers. In the beginning it will just be a single number. To find the first set/digit, add the current divisor we got from step 2 with the last digit of the quotient.
- Now we need to get a new dividend to calculate the second digit. In order to get the new dividend, add down the next pair beside the remainder. This will be your new dividend.
- Now that we have a new dividend we can find the second digit of the divisor that we can add beside the first set/digit. It might be hard to understand so I will explain it with and example. Lets say my first digit is 2. First take the first digit you have (2) and start your second digit as 0 (20). Next, you need to multiply the starting divisor with your second digit (20 x 0 = 0) and check if it is less than or equal to your new dividend you got in the previous step. If it is still less than your remainder change the second digit one number higher (21 x 1). If it is greater than your dividend then use the previous second digit value and now you got a new divisor! otherwise just make the second digit value 1 number higher and do the multiplication until the product is less than or equal to your divisor.

**Step #4**: If all your pairs are finished first check if your remainder is 0, if it is 0 then your quotient is your square root. If it is not 0 then add down a pair of 0's beside your remainder which will then be your new dividend, then add a decimal beside your current quotient. Repeat everything else step 3 and after. I recommend stopping after you got 3 digits after the decimal, but if you want a more accurate answer you can continue repeating the steps.

Now you have sucessfully found the square root!

## How would you do this in code?

Here is the code I did to solve square roots. I'm working on getting a more accurate answer.

```ts
// Functions I created to be used in the sqrt calculation code below.
createPairs(numberInput: number) : Array<number> {
        let remainder: number = numberInput.toString().length % 2;
        let numberInputString: string = numberInput.toString();
        let pairsArray: Array<number> = [];
        if (remainder != 0) {
            numberInputString = "0" + numberInput.toString();
        }
        
        let numberOfLoops: number = numberInputString.length / 2;
        for(let i: number = 0; i < numberOfLoops; i++) {
            let pair: number = Number.parseInt(numberInputString.substring(i * 2, i * 2 + 2));
            pairsArray.push(pair);
        }
        return pairsArray
    }

getQuotient(divisor: number, divident: number) {
    let i: number = 1;
    let result: number = 0;
    while(result <= divident) {
        i++;
        result = divisor * i;
    }
    return i - 1;
}

findSqrt(sqrtNumber: number) {
    // Variables to be used in the code below
    let pairsArray: Array<number> = createPairs(sqrtNumber);
    let quotient: number = 0;
    let currentRemainder: number = 0;
    let overAllQuotient: number = 0;
    let divisor = this.findSquareRootOfNumber(pairsArray[0]);
    let currentDivident: number = 0;
    let firstPartOfDivisor: number = 0;
    let secondPartDigit: number = 0;

    // Loop for repeating the steps just like on paper.
    for(let i: number = 0; i <= pairsArray.length - 1; i++) {
        let currentPair: number = pairsArray[i];
        currentDivident = Number.parseInt(currentRemainder.toString() + currentPair.toString());
        quotient = getQuotient(divisor, currentDivident);
        overAllQuotient = Number.parseInt(overAllQuotient.toString() + quotient.toString()) 
        currentRemainder = currentDivident % divisor;

        firstPartOfDivisor = divisor + Number.parseInt(overAllQuotient.toString()[overAllQuotient.toString().length - 1]);
        
        
        if(pairsArray.length - 1 != i) {
            currentDivident = Number.parseInt(currentRemainder.toString() + pairsArray[i+1].toString());
            secondPartDigit = this.findSecondDigit(firstPartOfDivisor, currentDivident);
            divisor = Number.parseInt(firstPartOfDivisor.toString() + secondPartDigit.toString());
        }
    } 

    if(currentRemainder != 0) {
        // Adding a pair of 0's by multiplying by 100.
        currentDivident = currentRemainder * 100;
        secondPartDigit = this.findSecondDigit(firstPartOfDivisor, currentDivident);
        overAllQuotient = overAllQuotient + Number.parseFloat("." + secondPartDigit.toString());
    }

    return overAllQuotient;
}
```

Copy and paste the code in your code editor and try out my code!

Regards,

Cool Coder Kid :-)