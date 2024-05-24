function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);
        console.log("Points:", demeritPoints);
        
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}

// Test the function
const speed = prompt("Enter the speed of the car: "));
calculateDemeritPoints(speed);
