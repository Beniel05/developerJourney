// Change this value to test different outcomes: "Saturday", "Monday", or "Invalid"
const day = "Monday"; 

switch (day) {
  case "Monday":
    console.log("Start of the work week! ☕");
    break; // Stops execution from bleeding into the next case

  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("Just a normal workday. 💻");
    break; // Multiple cases can share the same outcome

  case "Friday":
    console.log("Weekend is almost here! 🎉");
    break;

  case "Saturday":
  case "Sunday":
    console.log("It's the weekend! Relax! 🛌");
    break;

  default:
    console.log("That is not a valid day of the week. ❌");
    // 'break' is not strictly necessary for the last item (default)
}
