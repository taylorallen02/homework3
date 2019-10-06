# homework3
Application generates a random password based on user-selected criteria. 

![Capture](https://user-images.githubusercontent.com/55037566/66264025-7e429b00-e7b2-11e9-9435-ea7df39b62ed.PNG)


The user is prompted to choose from the following password criteria:
Length (8 and 128 characters) & Character type: Special characters; Numeric characters; Lowercase characters; Uppercase characters

The application validates user input - at least one character type is selected.

The user also has the option to click a button to copy the password to their clipboard.

--Created a text area where generated password will appear
--Created a "generate" button and "copy" button
--Added multiple input fields for specified criteria
        Length - input value set with min and max to meet requirements
        checkboxes - select and deselect options for symbols, numbers, uppercase

--created arrays with different characters 
    var char = "abcdefghijklmnopqrstuvwxyz";
    var num = "123456789";
    var sym = "!@#$%^&*()_+=-';:/?.>,<\|";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

--get variables - define getters
    var charNum = document.getElementById("charNum");
    var symbols = document.getElementById("sym");
    var numbers = document.getElementById("num");
    var upperBox = document.getElementById("upper");
    var submit = document.getElementById("submit");
    var newPwd = document.getElementById("newPwd");

--added event listener to generate password upon user input and clicking generate button
submit.addEventListener("click",function(e){
    var characters = char;
    (numbers.checked) ? characters += num : '';
    (symbols.checked) ? characters += sym : '';
    (upperBox.checked) ? characters += upper : '';
    newPwd.value = password(charNum.value, characters);
});

--added function to randomize password output when clicking generate button based on        user selection
function password(l,characters){
    var pwd = '';
    for(var i = 0; i<l; i++){
    pwd += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return pwd;
}

--added function to copy generated password to clipboard when clicking copy button
function myFunction(){
    var copyClipboard = document.getElementById("newPwd");
    copyClipboard.select();
    copyClipboard.setSelectionRange(0, 128);
    document.execCommand("copy");
}