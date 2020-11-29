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
let employeeDailyHoursAndWageArray = new Array();

while(totalEmployeeHours <= MAXIMUM_HOURS_IN_A_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let employeeHours = getWorkingHours(employeeCheck);
    totalEmployeeHours += employeeHours;
    employeeDailyHoursAndWageArray.push (
    {
        dayNumber: totalWorkingDays,
        dailyHours: employeeHours,
        dailyWage: calculateDailyWage(employeeHours),
        toString() {
            return "\nDay" + this.dayNumber + " => working hours is " + this.dailyHours + " and wage earned = " + this.dailyWage 
        },

    });
}

console.log("Showing daily hours worked and wage earned: " + employeeDailyHoursAndWageArray);

let totalWages = employeeDailyHoursAndWageArray.filter(employeeDailyHoursAndWage => employeeDailyHoursAndWage.dailyWage > 0).reduce((totalWage, dailyHoursAndWage) => totalWage += dailyHoursAndWage.dailyWage, 0);
let totalHours = employeeDailyHoursAndWageArray.filter(employeeDailyHoursAndWage => employeeDailyHoursAndWage.dailyWage > 0).reduce((totalHours, dailyHoursAndWage) => totalHours += dailyHoursAndWage.dailyHours, 0);
console.log("Total hours = " + totalHours + ", total wages = " + totalWages);

process.stdout.write("Logging full working days");
employeeDailyHoursAndWageArray.filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours == 8).forEach(dailyHoursAndWage => process.stdout.write(dailyHoursAndWage.toString()));

let partWorkingDayStringArray = employeeDailyHoursAndWageArray.filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours == 4).map(dailyHoursAndWage => dailyHoursAndWage.toString());
console.log("\nPart working day string: " + partWorkingDayStringArray);

let nonWorkingDayNumbers = employeeDailyHoursAndWageArray.filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours == 0).map(dailyHoursAndWage => dailyHoursAndWage.dayNumber);
console.log("Non-working day numbers: " + nonWorkingDayNumbers);

console.log("First day when fulltime wage was earned: " + employeeDailyHoursAndWageArray.find(dailyHoursAndWage => dailyHoursAndWage.dailyWage == 160));

console.log("Is every element holding fulltime wage: " + employeeDailyHoursAndWageArray.every(dailyHoursAndWage => dailyHoursAndWage.dailyWage == 160));

console.log("Any parttime wage: " + employeeDailyHoursAndWageArray.some(dailyHoursAndWage => dailyHoursAndWage.dailyWage == 80));

console.log("Number of days employee worked = " + employeeDailyHoursAndWageArray.filter(dailyHoursAndWage => dailyHoursAndWage.dailyWage > 0).length);

