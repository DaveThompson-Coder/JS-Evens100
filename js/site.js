// get the values from the page
//Start or Controller function
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //Inputs MUST be Validated so you know they are integers!!
    //by using parse into Integers function
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call the generateNumbers function
        let numbers = generateNumbers(startValue, endValue);
        //call the displayNumbers function
        displayNumbers(numbers);
    } else {
        alert("You must enter integers");
    }
}

// generate numbers from the start value to the end value
//These are the Logic Function(s)
function generateNumbers(sValue, eValue) {

    let numbers = [];

    //we want to get all from start to end

    for(let index = sValue; index <= eValue; index++){
        //this will exercute in a loop until index = eValue
        numbers.push(index);
    }
    return numbers;
}

//display the numbers and mark the even numbers bold
//display or view function
function displayNumbers(numbers) {

    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {

        let className = "even";

        let number = numbers[index];

        if(number % 2 == 0) {
            className = "even";
        }
        else {
            className = "odd";
        }
        templateRows += `<tr><td class="${className}" >${number}</td></tr>`;
    }    
    document.getElementById("results").innerHTML = templateRows
}