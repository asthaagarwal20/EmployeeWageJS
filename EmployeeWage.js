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
let dailyEmpWageAndDailyHrs=new Array();
let empWageMap=new Map();
let empDailyHrsMap=new Map();
while(day<20&&totalWorkingHours<160)
{
    let empCheck=Math.floor(Math.random()*10)%3;
    let empWorkingHr=getWorkingHr(empCheck);
          totalWorkingHours=totalWorkingHours+empWorkingHr;
          dailyEmpWage.push(CalEmpWage(empWorkingHr));
          empWageMap.set(day+1,CalEmpWage(empWorkingHr));
            day++;
            dailyEmpWageAndDailyHrs.push(
                {
                    dayNum:day,
                    dailyhours:empWorkingHr,
                    dailyWage:CalEmpWage(empWorkingHr),
                    toString(){
                        return '\nday'+this.dayNum+' dailyHours '+this.dailyhours+' dailywage '+this.dailyWage                
                    },
                }
            );
}
console.log("UC10"+dailyEmpWageAndDailyHrs);
        totalWage=CalEmpWage(totalWorkingHours);
console.log("Total working hr is " + totalWorkingHours) ;
console.log("No of Days is "+day);
console.log(" Daily Employee Wage is "+dailyEmpWage);
console.log("Total employee Wage is "+totalWage);
console.log(empWageMap);

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
 