function returnDay1(day) {
    if(day >= 1 && day <= 7) {
        switch (day) {
            case 1: return "Monday";
            case 2: return "Tuesday";
            case 3: return "Wednesday";
            case 4: return "Thursday";
            case 5: return "Friday";
            case 6: return "Saturday";
            default: return "Sunday";
        }
    } else {
        return null;   
    }
}
// OR
function returnDay2(day) {
    if(day < 1 && day >= 7) {
        return null;
    } 
    let days = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days[day];
}

console.log(returnDay1(5));
console.log(returnDay2(7));