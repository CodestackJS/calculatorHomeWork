// Pseudocode
// --Shopping List--
// We will need 10 buttons of numbers 0-9
// We will also need the buttons for our operators +-/* 
// We will need a clear button AND a equals button =
// We will need a display area
// ----
// --Possible Features--
// Perhaps we need a backspace button for deleting single characters without starting completely over(?)
// A negative key for toggling a number between negative and positive
// Possibly making the ability to type out our numbers rather than use the keys
// ----
// --The Process--
//First Number:  We press number keys to build our first number, be it one or several digits
//Select an operator, telling us what kind of math we will be doing before selecting our second number
// Second Number:  We press number keys to build our second number, be it one or several digits
// Typically, this is the point where we would click the equals button to complete our math
// --However, if we want to chain more mathematics together with more operators, clicking an operator should complete the math equation we set, and then carry the result over as the first number for a new equation
// --Also, if you hit equals, it will complete the equation, but THEN we can hit another operator in order to use the result as the first number of a new equation
// After an equation has happened, hitting a number key clears out the previous equation and starts building a new first number for a new equation 
// The clear button can be pressed at any time to clear out the previous math and clear the display, starting us back at building a new first number. 
// This application should LOOK like a calculator layout= this means a display on top and a square grid of keys down below. 
// Pressing 'Enter' on your keyboard should fire off the equals button


let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnPlus = document.getElementById("btnPlus");
let btnMinus = document.getElementById("btnMinus");
let btnMulti = document.getElementById("btnMulti");
let btnDivide = document.getElementById("btnDivide");
let btnClear = document.getElementById("btnClear");
let btnEqual = document.getElementById("btnEqual");
let displayArea = document.getElementById("displayArea");
let btnbackSpace = document.getElementById("btnbackSpace");
let btnOnOff = document.getElementById("btnOnOff");
let stringNumber = "";
let operatorSaved = "";
let num1 = 0;
let num2 = 0;
let result = 0;
let OnOff = false;

document.getElementById("btnbackSpace").disabled = true;
document.getElementById("btnEqual").disabled = true;
document.getElementById("btnClear").disabled = true;
document.getElementById("btnDivide").disabled = true;
document.getElementById("btnMulti").disabled = true;
document.getElementById("btnMinus").disabled = true;
document.getElementById("btnPlus").disabled = true;
document.getElementById("btn0").disabled = true;
document.getElementById("btn9").disabled = true;
document.getElementById("btn8").disabled = true;
document.getElementById("btn7").disabled = true;
document.getElementById("btn6").disabled = true;
document.getElementById("btn5").disabled = true;
document.getElementById("btn4").disabled = true;
document.getElementById("btn3").disabled = true;
document.getElementById("btn2").disabled = true;
document.getElementById("btn1").disabled = true;


// The follwoign is the function that dictates the behaviour of our number keys!
function numberPress(btnNum){
    //alert("you pressed the " + btnNum + " key!");
    if(result != 0){
        resetCalc();
    }
    stringNumber += btnNum;
    console.log(stringNumber);

    updateDisplay();
}

function opPress(op){
    //if our result is NOT 0, we can assume we are trying to continue doing math with our current result as the first number
    if(result != 0){
        operatorSaved = op;
        num1 = result;
        stringNumber = "";
        result = 0;
    }
    //if we have our first number and have NOT started building our second number, change the operator
    else if(num1 != 0 && stringNumber == ""){
        operatorSaved = op;
    }
    else if(num1 != 0 && stringNumber != ""){
        doMath();
        operatorSaved = op;
        num1 = result;
        stringNumber = "";
        result = 0;
    }
    // by process of elimination we know that we were just builiding our 1st number and need to save it to continue on to building our second number
    else{
        operatorSaved = op;
        //Number is like an int32 with c# while toString is coverting to string
        num1 = Number(stringNumber);
        stringNumber = "";
    }
    updateDisplay();
}

//to display the number that's selected
function updateDisplay(){
    if(operatorSaved == ""){
        displayArea.innerText = stringNumber;
    }
    else{
        displayArea.innerText = num1 + " " + operatorSaved + " " + stringNumber
    }
}





//event Listeners
btn0.addEventListener("click", function(){
    numberPress("0");
});
btn1.addEventListener("click", function(){
    numberPress("1");
});
btn2.addEventListener("click", function(){
    numberPress("2");
});
btn3.addEventListener("click", function(){
    numberPress("3");
});
btn4.addEventListener("click", function(){
    numberPress("4");
});
btn5.addEventListener("click", function(){
    numberPress("5");
});
btn6.addEventListener("click", function(){
    numberPress("6");
});
btn7.addEventListener("click", function(){
    numberPress("7");
});
btn8.addEventListener("click", function(){
    numberPress("8");
});
btn9.addEventListener("click", function(){
    numberPress("9");
});
btnPlus.addEventListener('click', function(){
    opPress("+");
});
btnMinus.addEventListener('click', function(){
    opPress("-");
});
btnMulti.addEventListener('click', function(){
    opPress("X");
});
btnDivide.addEventListener('click', function(){
    opPress("÷");
});

btnbackSpace.addEventListener('click', function(){
    backspace();
});
btnOnOff.addEventListener('click', function(){
   OnOffPress();

});


// OnOff Funtion
function OnOffPress(){
    OnOff = !OnOff;
if(OnOff === true)  {
    alert("You may now start to calculate"); 
    document.getElementById("btnbackSpace").disabled = false;
    document.getElementById("btnEqual").disabled = false;
    document.getElementById("btnClear").disabled = false;
    document.getElementById("btnDivide").disabled = false;
    document.getElementById("btnMulti").disabled = false;
    document.getElementById("btnMinus").disabled = false;
    document.getElementById("btnPlus").disabled = false;
    document.getElementById("btn0").disabled = false;
    document.getElementById("btn9").disabled = false;
    document.getElementById("btn8").disabled = false;
    document.getElementById("btn7").disabled = false;
    document.getElementById("btn6").disabled = false;
    document.getElementById("btn5").disabled = false;
    document.getElementById("btn4").disabled = false;
    document.getElementById("btn3").disabled = false;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn1").disabled =false;

}
else{
    resetCalc();
    alert("your calculator is OFF!");
    document.getElementById("btnbackSpace").disabled = true;
    document.getElementById("btnEqual").disabled = true;
    document.getElementById("btnClear").disabled = true;
    document.getElementById("btnDivide").disabled = true;
    document.getElementById("btnMulti").disabled = true;
    document.getElementById("btnMinus").disabled = true;
    document.getElementById("btnPlus").disabled = true;
    document.getElementById("btn0").disabled = true;
    document.getElementById("btn9").disabled = true;
    document.getElementById("btn8").disabled = true;
    document.getElementById("btn7").disabled = true;
    document.getElementById("btn6").disabled = true;
    document.getElementById("btn5").disabled = true;
    document.getElementById("btn4").disabled = true;
    document.getElementById("btn3").disabled = true;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn1").disabled = true;
}
updateDisplay();
}



//Backspace Function
//if number entered needs to clear, press the backspace to clear one number at a time, every backspace clears
function backspace(){
        stringNumber = stringNumber.slice(0, -1);
        updateDisplay();
    
}


//This function clears out the saved values so we start over completely
function resetCalc(){
    stringNumber = "";
    operatorSaved = "";
    num1 = 0;
    num2 = 0;
    result = 0;
    updateDisplay();
}

//do math
function doMath(){
    num2 = Number(stringNumber);
    switch(operatorSaved){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "X":
            result = num1 * num2;
            break;
        case "÷":
            result = num1 / num2;
            break;
    }
}

//This even handles when the equals button is pressed to perform the appropriate math.
btnEqual.addEventListener("click", function(){
    doMath();
    displayArea.innerText = result;
});


btnClear.addEventListener("click", function(){
    resetCalc();
});