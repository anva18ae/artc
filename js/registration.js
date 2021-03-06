var users = (localStorage.getItem("Users") !== null) ? JSON.parse(localStorage.getItem("Users")) : [];
var usersAdress = (localStorage.getItem("UsersAdress") !== null) ? JSON.parse(localStorage.getItem("UsersAdress")) : [];
// var btn = document.getElementById("onSubmitButton");
var form = document.getElementById('regForm');


// Validation that will run on click and if valid, push user into users array
function validateReg() {
    // If statements run through the validation functions for the registration form. 
    // If validation fails, boolean statement within the function will not store entered value. 
    if (!checkGender()) {
        alert("You need to pick a gender.");
        return true;
    }
    if (!checkEmail(form.email.value)) {
        alert("Email not valid or is used by another user.");
        return false;
    }
    if (!checkDateOfBirth()) {
        alert("You need to enter a valid Danish CPR number, e.g. DDMMYY-NNNN.");
        return false;
    }
    if (!checkPc()) {
        alert("Postal code is not in Copenhagen.");
        return false;
    }
    if (!checkPwd()) {
        alert("Password not valid.");
        return false;
    }
    if (!confirmPwd()) {
        alert("Passwords need to match.");
        return false;
    }
    if (!checkPhone()) {
        alert("You must enter a Danish phone number.");
        return false;
    } else {
        // How do we handle the gender, since they all have different id's, do we look for all of them?
        users.push(new User(form.firstname.value, form.lastname.value, form.gender.value, form.email.value, form.cpr.value, form.password.value))
        localStorage.setItem("Users", JSON.stringify(users));
            
        usersAdress.push(new Address(form.email.value, form.phone.value, form.street.value, form.postal.value, form.city.value))
        localStorage.setItem("UsersAdress", JSON.stringify(usersAdress));
        alert("You have successfully created an account and will be redirected to our login page.");
        document.location.href = "../html/login.html";
    }
};

    
// Checks if one of the gender radio buttons is selected 
function checkGender() { 
    var gender = document.getElementsByName("gender");
    var isChecked = false;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            isChecked = true;
            return true;
            }
        }
        if (!isChecked) { 
            return false;
        }       
}

// Checks if email is already used by checking if it's already in local storage
function checkEmail(email) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email == email) {
        return false;               
        }
    }
    return true;
}    

// Marie: why do they need a CPR for registering? That's kinda annoying when you dont have a CPR hehe. I think birthday should be enough?
function checkDateOfBirth() {
    // The regex accepts 10 numbers, ddmmyy-mm
    var cpr1 = /^[0-3][0-9][0-1]\d{3}-\d{4}?/;
    
    // Sets phone number variable equal to user input
    var cpr = document.getElementById("cpr").value;
    
    // Checks if phone1 (pattern) number matches criteria of variable phone
    if (cpr.match(cpr1)) {
        return true; 
    } else {
        return false;
    }
}

// Checks if the entered postal number is within the range of postal codes in CPH
function checkPc() {
    var postalCode = document.getElementById("postal").value;
    if (postalCode >= 1000 && postalCode <= 2990) {
        return true;
    } else {
        return false;
    }
}

// It would be nice to create a function that would check for the input city
// var checkCity = function() {
//     var city = document.getElementById("city").value;
// }

// Checks if password meets certain criteria
function checkPwd() {
    return true;
    // first () indicates at least 1 special character requirement, second () indicates at least 1 capital letter, third() indicates that the password has to contain at least 6 characters
    var pwd = /^(?=(.*[\W]){1,})(?=(.*?[A-Z]){1,})(?!.*\s).{6,}$/;
        
    // Sets password variable equal to user input
    var password = document.getElementById("password").value;

    // Checks if password matches criteria of variable pwd
    if (password.match(pwd)) {
        return true; 
    } else {
        return false;
    }
};

// Checks if confirmation password is the same as the entered password
// Is it possible to use password.value.match(""), would keep code DRY
function confirmPwd() {
    if (document.getElementById("password").value == document.getElementById("confirmPass").value) {
        return true;
    } else {
        return false;
    }
}
    
// Checks if phone number matches certain criteria
function checkPhone() {
    // The regex accepts 8 numbers, either written together, two and two or four and four
    var phone1 = /^^((\(?\+45\)?)?)(\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$/;
    // var phone1 = /^((^\d{8})|(^\d{2}[ ]\d{2}[ ]\d{2}[ ]\d{2})|(^\d{4}[ ]\d{4}))$/;
        
    // Sets phone number variable equal to user input
    var phone = document.getElementById("phone").value;
        
    // Checks if phone1 (pattern) number matches criteria of variable phone
    if (phone.match(phone1)) {
        return true; 
    } else {
        return false;
    }
}
