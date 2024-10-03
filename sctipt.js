const add = (num1, num2) => {

    if(typeof num1 == "string"){
        num1 = Number(num1);
    }
    else if(typeof num2 == "string"){
        num2 = Number(num2);
    }

    return num1 + num2;
}

const subtract = (num1, num2) => {

    if(typeof num1 == "string"){
        num1 = Number(num1);
    }
    else if(typeof num2 == "string"){
        num2 = Number(num2);
    }

    return num1 - num2;
}

const multiply = (num1, num2) => {

    if(typeof num1 == "string"){
        num1 = Number(num1);
    }
    else if(typeof num2 == "string"){
        num2 = Number(num2);
    }

    return num1 * num2;
}

const divide = (num1, num2) => {

    if(typeof num1 == "string"){
        num1 = Number(num1);
    }
    else if(typeof num2 == "string"){
        num2 = Number(num2);
    }

    return num1 / num2;
}

const operate = (num1, num2, operator) => {
    let result;

    if(operator === "+"){
        result = add(num1, num2);
        return result;
    }
    else if(operator === "-"){
        result = subtract(num1, num2);
        return result;
    }
    else if(operator === "*"){
        result = multiply(num1, num2);
        return result;
    }
    else if(operator === "/"){
        result = divide(num1, num2);
        return result;
    }
    else{
        result = "Invalid!";
        return result;
    }
};
