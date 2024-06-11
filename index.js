// The initial numbers that must be verified.
const n1 = 25;
const n2 = 8;
const n3 = 10;
const n4 = 7;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.

const isSum50 = (n1 + n2 + n3 + n4) == 50;

console.log(isSum50);


// Check: divisibility by 5

let N = 25;
// Extract the last digit using N % 10
let lastDigit = N % 10;
 
// Check for last digit
if (lastDigit === 0 || lastDigit === 5) {
    console.log(N + " is divisible by 5");
} else {
    console.log(N + " is not divisible by 5");
}

// Check: first number larger than last number

if (n1 < n4) {
console.log("I like Turtles");

} else {
console.log("Where's Fluffy?");
}

//Arithmetic Chain

a = (n2 - n1) * n3 / n4;

console.log(a);

// Check three: no number larger than 25
// if ANY of the numbers is larger than 25.
const isOver25 = n1 >= 25 &&  n2 <  25 && n3 < 25 && n4 < 25;

console.log(isOver25);

// Function to calculate details of the road trip 
function calculateRoadTrip(distance, speed, fuelEfficiency, fuelCostPerGallon, fuelBudget) {
    // Calculate the total travel time in hours 
    const travelTime = distance / speed; 
    // Calculate the total fuel needed in gallons 
    const totalFuelNeeded = distance / fuelEfficiency; 
    // Calculate the total fuel cost in dollars 
    const totalFuelCost = totalFuelNeeded * fuelCostPerGallon; 
    // Check if the fuel budget is enough 
    const isBudgetEnough = totalFuelCost <= fuelBudget; // Return the results as an object 
    return { travelTime: travelTime.toFixed(2), // in hours 
    totalFuelNeeded: totalFuelNeeded.toFixed(2), // in gallons 
    totalFuelCost: totalFuelCost.toFixed(2), // in dollars 
        isBudgetEnough: 
    isBudgetEnough // true or false 
    }; } 
    
    // Define the parameters for the road trip 
    const distance = 1500; // Distance in miles 
    const fuelCostPerGallon = 3; // Cost of fuel per gallon in dollars 
    const fuelBudget = 175; // Fuel budget in dollars 
    
    // Define the speeds and corresponding fuel efficiencies 
    const speeds = [55, 60, 75]; // Speeds in miles per hour 
    const fuelEfficiencies = [30, 28, 23]; // Fuel efficiencies in miles per gallon 
    
    // Loop through each speed and calculate the trip details 
    speeds.forEach((speed, index) => { 
    const fuelEfficiency = 
    fuelEfficiencies[index];
     const result = 
    calculateRoadTrip(distance, speed, fuelEfficiency, fuelCostPerGallon, fuelBudget); 
    // Log the results using template literals console.log(`At ${speed} miles per hour:`); console.log(`Total Travel Time: ${result.travelTime} hours`); 
    console.log(`Total Fuel Needed: ${result.totalFuelNeeded} gallons`); 
    console.log(`Total Fuel Cost: $${result.totalFuelCost}`); 
    console.log(`Is Budget Enough: ${result.isBudgetEnough ? 'Yes' : 'No'}`); 
    console.log('-------------------------------'); 
    });