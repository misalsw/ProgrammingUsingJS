
let month = prompt('Enter a Month: ');
let day = prompt('Enter a day: ');

let isInDateinRange = false;

if(month == 'March' && day >= 20 ){
    isInDateinRange = true;
}
if(month == 'April' || month == 'May' ){
    isInDateinRange = true;
}
if(month == 'June' && day <= 20 ){
    isInDateinRange = true;
}

console.log("The given day and month is in range - " + isInDateinRange)
