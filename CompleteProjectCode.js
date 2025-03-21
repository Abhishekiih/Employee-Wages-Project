const present = 1;

let isPresent = Math.floor(Math.random() * 10) % 2;

if (isPresent == present) {
  console.log("Employee is Present");
} else {
  console.log("Employee is not Present");
  return;
}

//calculating dailywage of an employee with using a function
let workingHours = Math.floor(Math.random() * 10) % 3;

const isPartTime = 1;
const isFullTime = 2;
const partTime = 4;
const fullTime = 8;
const wagePerHour = 20;

function getWorkingHours(workingHours) {
  switch (workingHours) {
    case isPartTime:
      return partTime;

    case isFullTime:
      return fullTime;

    default:
      return 0;
  }
}

let wage = wagePerHour * getWorkingHours(workingHours);

console.log("Daily wage generated for employee is ", wage);

//calcultating wages for a Month

const numberOfWorkingDays = 20;

let empHrs = 0;

for (let i = 1; i <= numberOfWorkingDays; i++) {
  let empCheck = Math.floor(Math.random() * 10) % 3; //getting fulltime, partime or notime status
  empHrs += getWorkingHours(empCheck);
}

let empWage = empHrs * wagePerHour;
console.log(
  "Monthly Wage of the Employee for hours " + empHrs + " is " + empWage
);

//calculating Employee wage Untill hours are 160 or days completed are 20

empHrs = 0;
let numberOfTotalDays = 0;
while (empHrs <= 160 && numberOfTotalDays < 20) {
  empCheck = Math.floor(Math.random() * 10) % 3;
  empHrs += getWorkingHours(empCheck);
  numberOfTotalDays++;
}
empWage = empHrs * wagePerHour;

console.log(
  "Total working days are : " +
    numberOfTotalDays +
    ", Total working hours are : " +
    empHrs +
    ", Wage of Employee is : " +
    empWage
);

// Daily Wages Store In Array


function calcDailyWage(empHrs) {
    return empHrs * wagePerHour;
}

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days: " + totalWorkingDays +
    ", Total Hrs: " + totalEmpHrs + ", Emp Wage: " + empWage);
