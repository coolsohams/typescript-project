

// class Student {
//     id: number = 0;
//     name: string = "";
//     age: number = 0;

import { stat } from "fs";

//     constructor(idParam: number, nameParam: string, ageParam: number){
//         id = idParam;
//         age = ageParam;
//         name = nameParam;
//     }

//     toString(): string{
//         return `Student ID: ${id}, Student Name: ${name}, Student Age: ${age}`;
//     }
// }

// var studentObject: Student = new Student(936001, "Shaurya Negi", 11);

// var studentObject2: Student = new Student(898176, "Erhan Ali", 11);

// var studentObject3: Student = new Student(895396, "Daniyal Samadi", 11);

// var lisgar6D: Array<Student> = [studentObject2, studentObject3];

// var otherSchools: Array<Student> = [studentObject];

// var studentInfoMap = new Map<string, Array<Student>>();

// studentInfoMap.set("Lisgar 6D", lisgar6D);

// studentInfoMap.set("Other Schools", otherSchools);

// var studentsArrray = studentInfoMap.get("Lisgar 6D");

// if(studentsArrray != null) {
//     for(var counter = 0; counter < studentsArrray.length; counter++) {
//         console.log(studentsArrray[counter].toString());
//     }
// }


// //__________________________________________________________________________________-_____________________________
// var testArray: Array<string> = ["testvalue1, testvalue2"];

// var testMap = new Map<string, Array<string>>();

// testMap.set("TestKey1", testArray);

// console.log(testMap.has("TesstKey1"));

// var bookRatingsArray: Array<number> = [2,4]

// var addedRatings: number = 0;

// for(var counter = 0; counter < bookRatingsArray.length; counter++) {
//     if(bookRatingsArray[counter] > 0 && bookRatingsArray[counter] < 6){
//         addedRatings = addedRatings + bookRatingsArray[counter];
//     }
// }

// var averageRating: number = addedRatings / bookRatingsArray.length;

// if (averageRating >= 4) {
//     console.log("Excellent Rating!");
// }

// console.log(`Rating is ${averageRating}`);
//_________________________________________________________________
// class AverageNumbers {
//     protected numberArray: Array<number> = [];
    
//     constructor(numberArrayParam: Array<number>) {
//         numberArray = numberArrayParam;
//     }

//     calculateAverage(): number {
//         let total: number = 0;
//         for(var counter = 0; counter < numberArray.length; counter++){
//             total = total + numberArray[counter];
//         }
//         return total / numberArray.length;
//     }
// }

// class BookRatings extends AverageNumbers {

//     constructor(numberArrayParam: Array<number>){
//         super(numberArrayParam)
//     }
    
//     private isRatingsValid(): boolean {
//         for(var counter = 0; counter < numberArray.length; counter++){
//             if(!(numberArray[counter] > 0 && numberArray[counter] < 6)){
//                 return false;
//             }
//         }
//         return true;
//     }

//     isBookExcellent(){
//         if(isRatingsValid()){
//             const average = calculateAverage();
//             if(average >= 4) {
//                 console.log("Book is Excellent!");
//             }
//         }
        
//     }
// }

// var book1: BookRatings = new BookRatings([3,3,4]);
// var book2: BookRatings = new BookRatings([3,3,4]);
// var book3: BookRatings = new BookRatings([5,4,4]);

// var bookRatingsMap = new Map<string, BookRatings>();

// bookRatingsMap.set("The Dogs", book1)
// bookRatingsMap.set("Front Desk", book2)
// bookRatingsMap.set("Haunted Canada", book3)

// var bookNamesArray = bookRatingsMap.keys();

// for (let key of bookNamesArray) {
//     var testObject = bookRatingsMap.get(key);
//     if(testObject != null) {
//         console.log(key);
//         console.log(testObject.calculateAverage());
//         testObject.isBookExcellent()
//     }
// }



//=================
import {CalculateTotalAndSalesTax} from './sales-tax-calculator';

let provinceName: string = "Texas";

let originalAmount: number = 200;

const canadaProvinceMap: Map<string, number> = new Map();
canadaProvinceMap.set("Alberta", 5);
canadaProvinceMap.set("British Columbia", 5);
canadaProvinceMap.set("Ontario", 13);
canadaProvinceMap.set("PEI", 15);
canadaProvinceMap.set("Nova Scotia", 15);

const usStatesMap: Map<string, number> = new Map();
usStatesMap.set("Texas", 0);
usStatesMap.set("Washington", 10);

let ontarioTax: CalculateTotalAndSalesTax = new CalculateTotalAndSalesTax(usStatesMap);

console.log(`Sales tax for ${provinceName}: ${ontarioTax.calculateSalesTax(originalAmount, provinceName)}`);

console.log(`Total for ${provinceName}: ${ontarioTax.calculateTotal(originalAmount, provinceName)}`);
