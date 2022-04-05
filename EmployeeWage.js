const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;
const PART_TIME_HOUR = 4;
const PRESENT = 1;
const ABSENT = 0;
const PARTIAL_PRESENT = 2;
let totalWage = 0;
let totalWorkingHours=0;
let empWage=0;
let day=0;
while(day<20)
{
    let empCheck=Math.floor(Math.random()*10)%3;
          totalWorkingHours=totalWorkingHours+getWorkingHr(empCheck);
          empWage=CalEmpWage(totalWorkingHours);
            day++;
        }
console.log("Total working hr is " + totalWorkingHours) ;
console.log("No of Days is "+day);
console.log("Employee Wage is "+empWage);

function getWorkingHr(empCheck)
{
    let empHr=0;
    switch (empCheck)
    {
        case PARTIAL_PRESENT:
            empHr= PART_TIME_HOUR;
            break;
        case ABSENT:
            empHr=0;
            break;
        case PRESENT:
            empHr = FULL_DAY_HOUR;
            break;
    }
    return empHr;
}
function CalEmpWage(workingHr)
{
return workingHr*WAGE_PER_HOUR;
}