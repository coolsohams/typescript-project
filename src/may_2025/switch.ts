let dayOfWeek: string = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("It's the start of the week!");
    break;
  case "Friday":
    console.log("Weekend is almost here!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy your weekend!");
    break;
  default:
    console.log("It's a regular weekday.");
}
