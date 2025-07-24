

// remember when coding in a variable there are 2 things and they are called Type & Value

import { Fruit } from "./my-classes";


//  let apple:Fruit = new Fruit();

//  let pinnaple:Fruit = new Fruit (); 

//  let orange:Fruit = new Fruit ();



let time:number = 14;

if(time >= 19) {
    // say good afternoon
    console.log("Good Afternoon");
} else {
    // say good morning
    console.log("Good morning");
}


// Sugar porgram
let sugar:number = 56;

if (sugar <= 2) {
console.log ("The amount of sugar is ok")
} else {
console.log ("Its to sweet ");
}



// it's sunday program 

let day:String = "monday";

if (day == "sunday") 
  {
      console.log ("its the holiday yay")
  }
 else {
    console.log ("oh no today its not the holiday idk") ;
 }



// ice cream program

 let cream:number = 1

 if (cream <= 1) {
     console.log ("the amount of ice cream is ok")
 }
 else {
     console.log ("LOL you took too much of ice cream")
 }

class Game {
    name:string | undefined;
    hascamera:boolean | undefined;
    hasPC:boolean | undefined;
    color:string | undefined;

    sampleFunctionVariable: Function = function() {
        console.log('this is function variable');
    }
}

let xBox:Game = new Game();
xBox.hascamera=true;

// snow program



let snow:number = 50

if (snow<= 50){
console.log ("there is less snow")
}
else {
console.log ("wow there is so much snow")

}


// Computer saying hi and bye

let year:number = 1010

if(year<=1010){
    console.log ("HELLO-WORLD")
}
    else{
console.log ("BYE-WORLD")
    }
     
   
class Car {
    name:String | undefined;
    engineType:String  | undefined;;
    numberOfWheels:number  | undefined;;
    bodyColor:String | undefined;;
    numbeOfDoors:number | undefined;;
    typeOfLight:String | undefined;;
    numberOfWindows:number | undefined;;
}

let hondaCivic:Car = new Car();
hondaCivic.name = "hondaciviv"
hondaCivic.bodyColor = "Silver Brown";
hondaCivic.engineType = "Gas";
hondaCivic.numbeOfDoors = 4;
hondaCivic.numberOfWheels = 4.0;
hondaCivic.numberOfWindows = 4;
hondaCivic.typeOfLight = "Bulb";
console.log ("My car color is: " + hondaCivic.bodyColor);
console.log ("my cars engine type is:" + hondaCivic.engineType);
console.log ("my car has these many doors:" + hondaCivic.numbeOfDoors);
console.log ("my car has this type of light" + hondaCivic.typeOfLight);
console.log ("My car has these many windows:" + hondaCivic.numberOfWindows);
console.log ("my car has these many tires:" + hondaCivic.numberOfWheels);

let steam:number = 50 

if (steam<= 50){
    console.log ("The amount of steam is ok")
}
else{
    console.log ("There is so much of steam")

}

let fordcar:Car = new Car();
fordcar.name = "fordcar"
fordcar.bodyColor = "red"
fordcar.engineType = "gas"
fordcar.numbeOfDoors = 4
fordcar.numberOfWheels = 4
fordcar.numberOfWindows = 4
fordcar.typeOfLight = "bulb"
console.log ("My car color is" + fordcar.bodyColor);
console.log ("my engine type is" + fordcar.engineType);
console.log ("the number of doors in my car is" + fordcar.numbeOfDoors);
console.log ("the number of eheels my car has is" + fordcar.numberOfWheels);
console.log ("the number of windows my car has is" + fordcar.numberOfWindows);
console.log ("the type of light my car has is" + fordcar.typeOfLight);



let nissancar:Car = new Car();
nissancar.name = "nissancar"
nissancar.bodyColor = "black"
nissancar.engineType = "gas"
nissancar.numbeOfDoors = 4
nissancar.numberOfWheels = 4
nissancar.numberOfWindows = 4
nissancar.typeOfLight = "bulb"
console.log ("My car color is" + nissancar.bodyColor);
console.log ("my cars engine type" + nissancar.engineType);
console.log ("the number of doors my car has" + nissancar.numbeOfDoors);
console.log ("my car has these many tires" + nissancar.numberOfWheels);
console.log ("my car has these many windows" + nissancar.numberOfWindows);
console.log ("my cars type of light is " + nissancar.typeOfLight);


let toyotaCar:Car = new Car();
toyotaCar.name = "toyotaCar"
toyotaCar.bodyColor = "yellow"
toyotaCar.engineType = "gas"
toyotaCar.numbeOfDoors = 4
toyotaCar.numberOfWheels = 4
toyotaCar.numberOfWindows = 4
toyotaCar.typeOfLight = "bulb"
console.log ("my car body color is:" + toyotaCar.bodyColor);
console.log ("my car engine type is:" + toyotaCar.engineType);
console.log ("the number of doors in my car is:" + toyotaCar.numbeOfDoors);
console.log ("the number of wheels my cars has is:" + toyotaCar.numberOfWheels);
console.log ("the number of windows my car has is:" + toyotaCar.numberOfWindows);
console.log ("the type of my car light is:" + toyotaCar.typeOfLight);



let chyslarcar:Car = new Car();
chyslarcar.name = "chyslarcar"
chyslarcar.bodyColor = "silverRed"
chyslarcar.engineType = "gas"
chyslarcar.numbeOfDoors = 6
chyslarcar.numberOfWheels = 4
chyslarcar.numberOfWindows = 4
chyslarcar.typeOfLight = "bulb"
console.log ("my car body color is:" + chyslarcar.bodyColor);
console.log ("my cars engine type is:" + chyslarcar.engineType);
console.log ("my car has these many doors:" + chyslarcar.numbeOfDoors);
console.log ("my car has these many wheels:" + chyslarcar.numberOfWheels);
console.log ("the number of windows my car has is:" + chyslarcar.numberOfWindows);
console.log ("The type of light my car has is:" + chyslarcar.typeOfLight);


let money:number = 1000

if (money <= 1000){
    console.log ("the amount of money you have is ok")
}
else{
    console.log ("you have so much of money")

}



let sun:number = 100

if (sun <= 100){
    console.log ("the brightness of the sun is normal")
}

else {
    console.log ("the brightness is a lot of the sun")
}



let heat:number = 21.5 

if (heat <= 21.5){
    console.log ("the temprature is warm")
}

else{
    console.log ("the temprature is really hot")
}



let cold:number = 2.5

if (cold <= 2.5){
    console.log ("its not that cold")
}

else{
    console.log ("its so cold")
}


let rain:number = 50
if (rain <= 50){
    console.log ("not much rain today")
}

else{
    console.log ("it's raining a lot sad sad sad")
}



let car:number = 1
 if (car >= 1){
     console.log ("You can buy :" + hondaCivic.name)
 }
else{
    console.log ("not the car you are looking for")
}

 
let cat:number = 2
if (cat >= 2){
    console.log ("you can buy :" + fordcar.name)
}

else{
    console.log ("not the car you are looking for")
}


let cor:number = 3

if (cor >= 3){
    console.log ("you can buy :" + nissancar.name)
}

else{
    console.log ("not the car you are looking for")
}



let core:number = 4
if (core >= 4){
    console.log ("you can buy:" + toyotaCar.name)
}


let caar:number = 5
if (caar >= 4){
    console.log ("you can buy:" + chyslarcar.name)
}

else{
    console.log ("not the car you are looking for")
}




let testlacar:Car = new Car();
testlacar.bodyColor = "white"
testlacar.engineType = "eletric"
testlacar.name = "Testla car"
testlacar.numbeOfDoors = 4
testlacar.numberOfWheels = 4
testlacar.numberOfWindows = 4
testlacar.typeOfLight = "Eletric bulb"
console.log ("my cars body color is:" + testlacar.bodyColor);
console.log ("my cars engine type is;" + testlacar.engineType);
console.log ("my cars name is:" + testlacar.name);
console.log ("my car has these many doors:" + testlacar.numbeOfDoors);
console.log ("my car has these many tires:" + testlacar.numberOfWheels);
console.log ("my car has these many windows:" + testlacar.numberOfWindows);
console.log ("the type of light my car has is:" + testlacar.typeOfLight);



let wet:number = 50
if (wet >= 50){
    console.log ("its not that wet")
}
else{
    console.log ("its so wet")
}


let dry:number = 50
if (dry >= 50){
    console.log ("its not that dry")
}
else{
    console.log ("its so dry")
}


let personaName: String = "deepa";

if(personaName == "soham") {
    console.log("My nanme is Soham!");
} else if(personaName == "surya") {
    console.log("My name is Surya!")
} else if(personaName == "deepa") {
    console.log("My name is Deepa!");
} else {
    console.log("Personn not found!")
}


let carName: String = "ford";

if (carName == "honda"){
    console.log ("My car name is:" + hondaCivic.name);
} else if(carName == "ford"){
    console.log  ("my car name is:" + fordcar.name);
} else if(carName == "nissan"){
    console.log ("my car name is;" + nissancar.name);
}




let animals:number = 35
if (animals >= 35){
    console.log ("there are less animal's outside today.")
}

else{
    console.log ("there are so many animals outside today")
}




let lexuscar:Car = new Car();
lexuscar.bodyColor = "white"
lexuscar.engineType = "eletric or gas"
lexuscar.name = "Lexus Car"
lexuscar.numbeOfDoors = 4
lexuscar.numberOfWheels = 4
lexuscar.numberOfWindows = 4
lexuscar.typeOfLight = "bulb"
console.log ("my car's body color is:" + lexuscar.bodyColor);
console.log ("my car's engine type is:" + lexuscar.engineType);
console.log ("my car's name is:" + lexuscar.name);
console.log ("the number of doors my car has:" + lexuscar.numbeOfDoors);
console.log ("my car has these many wheels" + lexuscar.numberOfWheels);
console.log ("my car has these many windows" + lexuscar.numberOfWindows);
console.log ("my cars type of light is:" + lexuscar.typeOfLight);



let temprature:number = 0;
if (temprature == 0){
    console.log ("The temprature is freezing cold");
} else if (temprature > 0 ) {
    console.log ("today its warm");
}else{
    console.log ("error");
}



let devicName:String = "Google Homez===";
if (devicName == "Google Home"){;
    console.log ("Google Home - Family Room Spekar");
}else if (devicName == "Alexa"){;
    console.log ("Amazon Alexa");
}else if (devicName == "Siri"){;
    console.log ("Apple inc Siri");
}else if (devicName == "Contana"){;
    console.log ("Windows Contana");
}
else{
    console.log ("Device Not Found");
}

let ForzaMotorsports5:Game = new Game();


