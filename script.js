// Calculate the daily wage for an employee

const monthlyPay = (time) =>{
    const pay = 1000
    const overtimePay = 200
    let overtimeTotal = time - 4 
    return(
        time === 4 ?  `Your salary is ${pay*time}` : `Your salary plus overtime pay is ${(pay * 4 + (overtimeTotal * overtimePay))}`
    )
} 
console.log(monthlyPay(4))
console.log(monthlyPay(6))
console.log(monthlyPay(8))

// I used Ternary operators
// the first if statement checks if time used is 4 hours
// the else just calculates for overtime and adds to the usual total of 4 hours




