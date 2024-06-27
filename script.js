
//instantiate all global variables
const num1 =[];
const num2 =[];
let number1="0";
let number2="0";
let operator="";
let num;//determines which array we work with

//maybe assign the functions your calling

//grouping event listeners
let buttons = document.querySelector(".entire-cal");

buttons.addEventListener("click",(e)=>{//to get each button's id when clicked
    let target = e.target;
    let targetID = target.id;

    isOperator(targetID);//checks if we clicked an operator
    if(operator.length === 0 && targetID.length >0){//make sure its not empty string 
        createNum1Arr(targetID,num1);//create the first number as array
        number1 = createNum1Number(num1);//get number1 from that number array
        console.log("number1:"+number1+" operator:"+operator+" number2:"+number2);//for debugging
        
    }
    else if(operator.length > 0 && targetID.length >0){//make sure its not empty string
        createNum1Arr(targetID,num2);//create the first number as array
        number2 = createNum1Number(num2);//get number2 from that number array
        console.log("number1:"+number1+" operator:"+operator+" number2:"+number2);//for debugging
        
    }



    
})


function createNum1Arr(number,arr){//add numbers from event listener

    switch(number){//determines what number to add
        case "one": arr.push("1");
        break;
        case "two": arr.push("2");
        break;
        case "three": arr.push("3");
        break;
        case "four": arr.push("4");
        break;
        case "five": arr.push("5");
        break;
        case "six": arr.push("6");
        break;
        case "seven": arr.push("7");
        break;
        case "eight": arr.push("8");
        break;
        case "nine": arr.push("9");
        break;
        case "zero": arr.push("0");
        break;
    }
    
}

function createNum1Number(arr){
    if (operator.length === 0){//if there is no operator
        return arr.join().replaceAll(",","");//remove comma when turning it to string
    }
    else if (operator.length > 0){//if there is an operator
        return arr.join().replaceAll(",","");//remove comma when turning it to string
    }
    
}

function isOperator(id){
    switch(id){
        case "AC": reset();
        break;
        case "changeSign": if(operator.length  === 0){changeSign(num1);} else if(operator.length > 0){changeSign(num2);}
        break;
        case "remainder": operator = id;
        break;
        case "divide": operator = id;
        break;
        case "multiply": operator = id;
        break;
        case "subtract": operator = id;
        break;
        case "addition": operator = id;
        break;
        case "equal": if(operator.length > 0 && number2 !== ""){doCal(number1,number2,operator);}
        break;
    }
}


function doCal(number1,number2,operator){
    let result;
    switch(operator){
        case "multiply": result = +number1 * +number2;
        break;
        case "divide": result = +number1 / +number2;
        break;
        case "remainder": result = +number1 % +number2;
        break;
        case "subtract": result = +number1 - +number2;
        break;
        case "addition": result = +number1 + +number2;
        break;
    }
    //make the result number1 and anything else we do as number2
    changeNumber1and2(result);
    console.log(result)
    return result;
}

function changeNumber1and2(result){
    //reset arr not number cuz number gets its value from array
    let delCount1= num1.length;
    let delCount2= num2.length;
    num1.splice(0,delCount1,result);//we should then push 0
    num2.splice(0,delCount2);//we should then push result

    // Reset number2 and operator
    number2 = "0";
    operator = "";

}

function reset(){
    number1 = "0";//for visual
    number2 = "0";//for visual
    let delCount1= num1.length;
    let delCount2= num2.length;
    num1.splice(0,delCount1);//we should then push 0
    num2.splice(0,delCount2);//we should then push result
    operator="";
}

function changeSign(arr){
    //if it includes -, then remove it, else add it to start
    if(arr.includes("-")){
        return arr.splice(0,1)//delete the fist item, which is the -
    }
    else{
        return arr.unshift("-")
        //arr.splice()
    }
    

}