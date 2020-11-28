const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUMBER_OF_WORKING_DAYS = 20;
const MAXIMUM_HOURS_IN_A_MONTH = 160;

function getWorkingHours(employeeCheck) {
    switch(employeeCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calculateDailyWage(employeeHours) {
    return employeeHours * WAGE_PER_HOUR;
}

let totalEmployeeHours = 0;
let totalWorkingDays = 0;
let employeeDailyWageArray = new Array();

while(totalEmployeeHours <= MAXIMUM_HOURS_IN_A_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let employeeHours = getWorkingHours(employeeCheck);
    totalEmployeeHours += employeeHours;
    employeeDailyWageArray.push(calculateDailyWage(employeeHours));
}

let employeeWage = calculateDailyWage(totalEmployeeHours);
console.log("Total days = " + totalWorkingDays + ", total hours = " + totalEmployeeHours + ", employee wage = " + employeeWage);

let totalEmployeeWage = 0;

function sum(dailyWage) {
    totalEmployeeWage += dailyWage;
}

employeeDailyWageArray.forEach(sum);
console.log("Total days = " + totalWorkingDays + ", total hours = " + totalEmployeeHours + ", employee wage = " + totalEmployeeWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

console.log("Employee wage with reduce = " + employeeDailyWageArray.reduce(totalWages, ));

let dailyCounter = 0;

function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + " = " + dailyWage;
}

let mapDayWithWageArray = employeeDailyWageArray.map(mapDayWithWage);
console.log("Daily wage map: ");
console.log(mapDayWithWageArray);

function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}

let fullDayWageArray = mapDayWithWageArray.filter(fulltimeWage);
console.log("Daily wage filter when fulltime wage earned: ");
console.log(fullDayWageArray);

function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("First time fulltime wage was earned on day: " + mapDayWithWageArray.find(findFulltimeWage));

function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("Check if all elements have fulltime wage: " + fullDayWageArray.every(isAllFulltimeWage));

function isAnyParttimewage(dailyWage) {
    return dailyWage.includes("80");
}

console.log("Check if any elements have parttime wage: " + mapDayWithWageArray.some(isAnyParttimewage));

function totalDaysWorked(numberOfDays, dailyWage) {
    if(dailyWage > 0) {
        return numberOfDays + 1;
    }
    return numberOfDays;
}

console.log("Number of days employee worked = " + employeeDailyWageArray.reduce(totalDaysWorked, 0));
