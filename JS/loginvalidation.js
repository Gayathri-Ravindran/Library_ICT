var mail = document.getElementById('mail');
var pwd = document.getElementById('pwd');

var err1 = document.getElementById('err1');
var err2 = document.getElementById('err2');


function login() {
    const emailRegx = /^([A-Za-z0-9.-_]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[A-Za-z]{2,3})?$/;
    const passRegx = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;

    if(mail.value.trim() == "" || pwd.value.trim() == ""){
        alert("Field can't be empty");
        return false;
    }
    // Email
    if(emailRegx.test(mail.value)){
        err1.innerText="Valid Mail address";
        err1.style.color="green";
    }
    else{
        err1.innerText="Invalid Mail address";
        err1.style.color="red";
        return false;
    }

    // Password
if (!passRegx.test(pwd.value)) {
    err2.innerText = "Weak Password";
    err2.style.color = "red";
    alert("Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number ")
    return false;
} else if (pwd.value.length < 8) {
    err2.innerText = "Medium Password";
    err2.style.color = "orange";
    return false;
} else {
    err2.innerText = "Strong Password";
    err2.style.color = "green";
    return true;
}

    
}