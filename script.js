var char = "abcdefghijklmnopqrstuvwxyz";
var num = "123456789";
var sym = "!@#$%^&*()_+=-';:/?.>,<\|";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var charNum = document.getElementById("charNum");
var symbols = document.getElementById("sym");
var numbers = document.getElementById("num");
var upperBox = document.getElementById("upper");
var submit = document.getElementById("submit");
var newPwd = document.getElementById("newPwd");


submit.addEventListener("click",function(e){
    var characters = char;
    (numbers.checked) ? characters += num : '';
    (symbols.checked) ? characters += sym : '';
    (upperBox.checked) ? characters += upper : '';
    newPwd.value = password(charNum.value, characters);
});

function password(l,characters){
    var pwd = '';
    for(var i = 0; i<l; i++){
        pwd += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return pwd;
}

function myFunction(){
    var copyClipboard = document.getElementById("newPwd");
    copyClipboard.select();
    copyClipboard.setSelectionRange(0, 128);
    document.execCommand("copy");
}
