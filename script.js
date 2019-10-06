var char = "abcdefghijklmnopqrstuvwxyz";
var num = "123456789";
var sym = "!@#$%^&*()_+=-';:/?.>,<\|";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var charNum = document.getElementById("charNum");
var symBox = document.getElementById("sym");
var numBox = document.getElementById("num");
var upperBox = document.getElementById("upper");
var submit = document.getElementById("submit");
var newPwd = document.getElementById("newPwd");


submit.addEventListener("click",function(e){
    var characters = char;
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';
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
