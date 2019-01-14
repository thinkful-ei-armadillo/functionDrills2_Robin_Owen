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