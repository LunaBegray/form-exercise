const sumbitBtn = document.querySelector(".submitBtn");
const emailInput = document.querySelector(".email");
const countryInput = document.querySelector(".country");
const zipCodeInput = document.querySelector(".zipCode");
const passwordInput = document.querySelector(".password");
const passwordConfInput = document.querySelector(".passwordConf");

const checkPassEq = function(){
    if(passwordInput.value != passwordConfInput.value){
        alert("the password and the confirmation password dont match you fucking dumbass")
        passwordConfInput.style.border = '2px solid red';
        passwordInput.style.border = '2px solid red';
        return false
    } else {
        passwordConfInput.style.border = '2px solid green';
        passwordInput.style.border = '2px solid green';
        return true
    }
}

sumbitBtn.addEventListener('click', function(){
    checkPassEq();
    if(checkPassEq() && emailInput.checkValidity() && countryInput.checkValidity() && zipCodeInput.checkValidity()){
        console.log("the checkPassed and everything is okay so We are erasing the values");
        emailInput.value = "";
        countryInput.value = "";
        zipCodeInput.value = "";
        passwordInput.value = "";
        passwordConfInput.value = "";
        passwordInput.style.border = "2px solid red";
        passwordConfInput.style.border = "2px solid red"
    }
});