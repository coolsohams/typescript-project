let testArray: Array<any> = [1,2,3,4,4,4,5,6,7,8,9,9,9,9];
let testArrayStr: Array<any> = ['q','w','e','e','y','m'];
console.log(testArrayStr.indexOf('e')); // Returns the first avaliable index of the parameter given. This line will return 2.
console.log(testArrayStr.lastIndexOf('e')); // Returns the last avaliable index of the parameter given. This line will return 3.
//________________________________________________________________________________________________________________________________________
let testArray2: Array<any> = ['q','w','e','e','y','m'];
let testArray3: Array<any> = ['l','o','r','d','e','y'];
console.log(testArray2.concat(testArray3)); // Combines the array that called the function with the array passed as a parameter. This line will return ['q', 'w', 'e', 'e','y', 'm', 'l', 'o','r', 'd', 'e', 'y']
//________________________________________________________________________________________________________________________________________
let testArray4: Array<any> = ['e','e','e','e','n','m'];
console.log(testArray4.join('*')); // Joins each element in the array with the given string in the parameter. This line will return "e*e*e*e*n*m"
//________________________________________________________________________________________________________________________________________
let testArray5: Array<any> = [1,2,3];
console.log(testArray5.push('e')); // Adds whatever was given into the parameter of the function at the ending of the array. It returns the new lenght of the array.. This will return 4.
console.log(testArray5); // Checking if 'e' was added into the array. This line will return [1,2,3,'e']
//________________________________________________________________________________________________________________________________________
let testArray6: Array<any> = [1,2,3];
console.log(testArray6.pop()); // Removes the last element from the array and returns it. This line will return 3.
//________________________________________________________________________________________________________________________________________
let testArray7: Array<any> = [1,2,3];
console.log(testArray7.reverse()) // This function reverts the array. this will return [3,2,1]
//________________________________________________________________________________________________________________________________________
let testArray8: Array<any> = [1,2,3];
console.log(testArray8.shift()) // This function removes the first element in the array and returns it. Exact opposite of the pop() method. This line will return 1.
//________________________________________________________________________________________________________________________________________
let testArray9: Array<any> = [1,2,3];
console.log(testArray9.unshift('m')); // This function adds a element at the starting of the array and returns the new length of the array. This line will return 4;
console.log(testArray9); // Checking if the element 'm' is now added in the array. This line will return ['m',1,2,3];
//________________________________________________________________________________________________________________________________________
let testArray10: Array<any> = [1,2,3,4,5,6];
console.log(testArray10.slice(2,5)) // This functions cuts into an array and returns the portion. In includes the starting index but discludes the ending index. This line will return [3,4,5]