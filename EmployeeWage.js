const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;
const PART_TIME_HOUR = 4;
const PRESENT = 1;
const ABSENT = 0;
const PARTIAL_PRESENT = 2;
let empCheck=Math.floor(Math.random()*10)%3;
let totalWage = 0;
               switch (empCheck)
            {
                case PARTIAL_PRESENT:
                    totalWage = PART_TIME_HOUR * WAGE_PER_HOUR;
                    break;
                case ABSENT:
                    break;
                case PRESENT:
                    totalWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
                    break;
            }
console.log("Daily employee wage is " + totalWage) ;
