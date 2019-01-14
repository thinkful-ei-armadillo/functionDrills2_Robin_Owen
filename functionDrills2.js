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