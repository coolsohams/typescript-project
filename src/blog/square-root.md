- Title
- Introduction
- Steps by Steps Explanation with Code Example
- Link to the code repository

# How to calculate Square Root using TypeScript
In this blog I am going to explain you about the code to calculate Sqaure Root using the **Long Dvision Method** with TypeScript 

## Sub Title
- Bullet 1
    - Sub Bullet 1
- Bullet 1

## Code Example to check whether a given number is perfect sqaure or not?

```javascript
    isPerfectSquare(sqrtNumber: number) : boolean {
        let squaresArray: Array<number> = this.findSquares(sqrtNumber);
        for(let i: number = 0; i <= sqrtNumber; i++) {
            if(squaresArray[i] == sqrtNumber) {
                return true;
            }
        }
        return false;
    }
```

### Sub Sub Title