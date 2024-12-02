// Use input prompt
function promptforsalary(){
    const basicsalaryinput = prompt("Please enter your basic salary");
    const benefitsInput = prompt("Please enter benefits");

    const basicsalary = parseFloat(basicsalaryinput);
    const benefits = parseFloat(benefitsInput);
}
//formula to calculate taxable income
const taxableincome = basicsalary + benefits;

//taxable bands for each category
let band1 = Math.trunc(2880000 * 0.1);
let band2 = Math.trunc(99000 * 0.25);
let band3 = Math.trunc(5611999 * 0.3);
let band4 = Math.trunc(3599999 * 0.325);
let band5 = Math.trunc((basicsalary - (288000 + 99000 + 5611999 + 3599999)) * 0.35);

//Calculate payee
function payee(){
    if (taxableincome > 0 && taxableincome <= 288000){return band1;}
    if (taxableincome > 288000 && taxableincome <= 388000){return band2 + band1;}
    if (taxableincome > 388000 && taxableincome <= 6000000){return band3 + band2 + band1;}
    if (taxableincome > 6000000 && taxableincome <= 9600000){return band4 + band3 + band2 + band1;}
    if (taxableincome > 9600000){return band5;}


}

//calculate gross salary
let relief = 16896;
const grosssalary = payee() - relief;

//calculate NHIF dedections
function nhif(){
    let calculatedpayee = grosssalary;
    if (calculatedpayee >= 0 && calculatedpayee <=5999){return 150;}
    if (calculatedpayee >= 6000 && calculatedpayee <=7999){return 300;}
    if (calculatedpayee >= 8000 && calculatedpayee <=11999){return 400;}
    if (calculatedpayee >= 12000 && calculatedpayee <=14999){return 500;}
    if (calculatedpayee >= 15000 && calculatedpayee <=19999){return 600;}
    if (calculatedpayee >= 20000 && calculatedpayee <=24999){return 750;}
    if (calculatedpayee >= 25000 && calculatedpayee <=29999){return 850;}
    if (calculatedpayee >= 30000 && calculatedpayee <=34999){return 900;}
    if (calculatedpayee >= 35000 && calculatedpayee <=39999){return 950;}
    if (calculatedpayee >= 40000 && calculatedpayee <=45000){return 1000;}
    if (calculatedpayee >= 45000 && calculatedpayee <=44999){return 1100;}
    if (calculatedpayee >= 50000 && calculatedpayee <=59999){return 1200;}
    if (calculatedpayee >= 60000 && calculatedpayee <=69999){return 1300;}
    if (calculatedpayee >= 70000 && calculatedpayee <=79999){return 1400;}                                    if (calculatedpayee >= 0 && calculatedpayee <=5999){return 150;
     } if (calculatedpayee >= 80000 && calculatedpayee <=89999){return 1500;}
    if (calculatedpayee >= 90000 && calculatedpayee <=99999){return 1600;}
    if (calculatedpayee >= 100000){return 1700;}
    }
















//calculate NSSF deductions
const nssf = basicsalary * 0.06;
const netsalary = grosssalary - nhif() - nssf;

console.log(payee());
console.log(grosssalary);
console.log(nssf);
console.log(nhif());
console.log(netsalary);