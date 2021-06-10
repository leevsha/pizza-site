let nameInput = document.getElementById("formGroupExampleInput");
let surnameInput = document.getElementById("formGroupExampleInput2");
let message = document.getElementById("exampleFormControlTextarea1");
let sendbtn = document.getElementById("sendbtn");
sendbtn.onclick = function () {
    if (nameInput.value == "") {
        nameInput.style.backgroundColor = "darkred";
    }
    else {
        nameInput.style.backgroundColor = "transparent"
    };
    if(surnameInput.value == ""){
        surnameInput.style.backgroundColor = "darkred";
    }
    else {
        surnameInput.style.backgroundColor = "transparent"
    };
    if(message.value == ""){
        message.style.backgroundColor = "darkred";
    }
    else {
        message.style.backgroundColor = "transparent"
    }
}
