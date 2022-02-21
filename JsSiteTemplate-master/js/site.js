// get the string from the user


function getValue()
{//let can only be used within the block of code

    document.getElementById("alert").classList.add ("invisible");
    let userString = document.getElementById ("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}
// reverse the string usin a for loop 
function reverseString(userString)
{
    let revString = [];
    for (let index = userString.length -1; index >=0 ; index--) {
        revString += userString[index];
        
    }
    
    return revString;
}   
//Display the reverse string to the user 
function displayString(revString)
{       
    //write to the page and turn on the alert ID
    document.getElementById("msg").innerHTML = "Your string reversed is: "+ revString;
    document.getElementById("alert").classList.remove("invisible");
}