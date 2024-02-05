var names = document.getElementById('names');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var pass = document.getElementById('pass');

var err1 = document.getElementById('err1');
var err2 = document.getElementById('err2');
var err3 = document.getElementById('err3');
var err4 = document.getElementById('err4');


function validation() {

    const nameRegx = /^[A-Za-z\s]+$/;
    const emailRegx = /^([A-Za-z0-9.-_]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[A-Za-z]{2,3})?$/;
    const phoneRegx = /^\d{10}$|^\d{3}-\d{3}-\d{4}$|^\d{3}\.\d{3}\.\d{4}$|^\d{3} \d{3} \d{4}$/;
    const passRegx = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
    // Check empty or contain white space
    if(names.value.trim()== ""||email.value.trim() ==""||phone.value.trim() ==""||pass.value.trim() ==""){
        alert("Fields can't be Empty");
        return false;
    }
    //Name
    if(nameRegx.test(names.value)){
        err1.innerText="Valid Name";
        err1.style.color="green";
    }
    else{
        err1.innerText="Invalid Name";
        err1.style.color='red';
       return false;
    }
    // Email
    if(emailRegx.test(email.value)){
        err2.innerText="Valid Mail address";
        err2.style.color="green";
    }
    else{
        err2.innerText="Invalid Mail address";
        err2.style.color="red";
        return false;
    }
    // Phone
    if (phoneRegx.test(phone.value) ) {
        err3.innerText="Valid Number";
        err3.style.color="green";
    }
    else{
        err3.innerText="Invalid Number";
        err3.style.color="red";
        return false;
    }
    // Password
if (!passRegx.test(pass.value)) {
    err4.innerText = "Weak Password";
    err4.style.color = "red";
    return false;
} else if (pass.value.length < 8) {
    err4.innerText = "Medium Password";
    err4.style.color = "orange";
    return false;
} else {
    err4.innerText = "Strong Password";
    err4.style.color = "green";
    return true;
}

    
    
}