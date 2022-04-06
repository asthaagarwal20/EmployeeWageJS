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
let dailyEmpWage=new Array();
while(day<20&&totalWorkingHours<160)
{
    let empCheck=Math.floor(Math.random()*10)%3;
    let empWorkingHr=getWorkingHr(empCheck);
          totalWorkingHours=totalWorkingHours+empWorkingHr;
          dailyEmpWage.push(CalEmpWage(empWorkingHr));
            day++;
        }
        totalWage=CalEmpWage(totalWorkingHours);
console.log("Total working hr is " + totalWorkingHours) ;
console.log("No of Days is "+day);
console.log(" Daily Employee Wage is "+dailyEmpWage);
console.log("Total employee Wage is "+totalWage);

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
//uc7A calculate total wage
function totalWages(totalWage,dailyWage)
{
    return totalWage+dailyWage;
}
console.log("Total Employee Wage is "+ dailyEmpWage.reduce(totalWages,0));

//UC7B show day along with daily wage
let daycntr=0;
function dayWithDailyWage(dailyWage)
{
    daycntr++;
    return daycntr+"= "+dailyWage;
}
let mapArray=dailyEmpWage.map(dayWithDailyWage);
console.log("Daily WAges"+mapArray);

//UC7C Show day where full wage 160 is earned
function fullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullWageArray=mapArray.filter(fullTimeWage);
console.log("Fltered array is\n"+fullWageArray);

//UC7D Find first occurance of full time wage
console.log("first occurancr of full time wage is "+mapArray.find(fullTimeWage));

//UC7E check if every element of full time wage is truely holding full time wage
console.log("check if every element of full time wage is truely holding full time wage "+mapArray.every(fullTimeWage));

//UC7F check if any part time wage
function PartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("Any part time wage exist "+mapArray.some(PartTimeWage));

//UC7G Find no of Days employee Worked
function totalDaysWorked(noOfDays,dailyWage)
{
    if(dailyWage>0)
    return noOfDays+1;
    return noOfDays;
}
console.log("total days worked "+dailyEmpWage.reduce(totalDaysWorked,0));