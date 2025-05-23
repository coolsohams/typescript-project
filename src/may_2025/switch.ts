var height: number = 0;
switch (true) {
    case height >= 90:
        console.log("Can ride Kid Roller Coasters.")
    case height >= 120:
        console.log("Can ride any roller coaster with a parent.")
    case height >= 150:
        console.log("Can ride any Roller Coaster without supervision.")
    default:
        console.log("Too short for any of the rides.")
}

// Don't add colons and minutes, just add the hour in 24-hr format.
var hour: number = 0;
switch (true) {
    case hour == 0:
        console.log("Midnight");
        break;
    case hour >= 1 && hour < 12:
        console.log("Morning");
        break;
    case hour == 12:
        console.log("Noon");
        break;
    case hour > 12 && hour < 18:
        console.log("Afternoon");
        break;
    case hour >= 18 && hour < 24:
        console.log("Evening");
        break;
    default:
        console.log("Invalid time");
}
