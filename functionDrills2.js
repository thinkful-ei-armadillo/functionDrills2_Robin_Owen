function jediName(firstName, lastName){
    return `${lastName.substring(0,4)}${firstName.substring(0,2)}`;
}

function beyond(num){
    if (isFinite(num) === false){
        console.log('and beyond');
    }
    else if (isFinite(num) === true && num > 0){
        console.log('to infinity');
    }
    else if(isFinite(num) === true && num < 0){
        console.log('to negative infinity');
    }
    else if(num === 0){
        console.log('Staying home');
    }
}

function decode(string){
    if(string.charAt(0) === "a"){
        return string.charAt(1);
    }
    else if(string.charAt(0) === "b"){
        return string.charAt(2);
    }
    else if(string.charAt(0) === "c"){
        return string.charAt(3);
    }
   else if(string.charAt(0) === "d"){
    return string.charAt(4);
   } 
    else {
        return " ";
    }  
}

function decodeMessage(str){
    const strArr = str.split(' ');
    let message = "";
    for(let i = 0; i < strArr.length; i++){
        message += decode(strArr[i]);
    }
    return message;
}
function daysInAMonth(month, leapYear){
    if(leapYear === true && month == "February"){
        return `${month} has 29 days`;
    }
    else if (leapYear === false && month == "February"){
        return `${month} has 28 days`;
    }
    switch (month){
        case 'January': case 'March': case 'May': case 'July': case 'August': case 'October': case 'December':
        return `${month} has 31 days`;
        break;
        case 'April': case 'June': case 'September': case 'November':
        return `${month} has 30 days`;
        break;
        default:
        return 'Must provide a valid month';
    }
}

function rps(num){
    const randomNo = Math.floor(Math.random() * 3) + 1;
    if (num === randomNo){
        return "tie";
    }
    else if (num === 1 && randomNo === 2 || num === 2 && randomNo === 3 
            || num === 3 && randomNo === 1) {
        return "You lose";
    } 
    else {
        return "You Win";
    }
}