function Validation() {
    var name = document.getElementById("name");
    var fathername = document.getElementById("fathername");
    var email = document.getElementById("email");
    var dobirth = document.getElementById("dob");
    var mobilenumber = document.getElementById("mobilenumber");
    var error = document.getElementById("error");
    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var error3 = document.getElementById("error3");
    var error4 = document.getElementById("error4");

    var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    error.innerHTML = "";
    error1.innerHTML = "";
    error2.innerHTML = "";
    error3.innerHTML = "";
    error4.innerHTML = "";
    name.style.border = "1px solid black";
    fathername.style.border = "1px solid black";
    email.style.border = "1px solid black";
    dobirth.style.border = "1px solid black";
    mobilenumber.style.border = "1px solid black";

    if (name.value.trim() == "") {
        error.innerHTML = "field is required";
        error.style.color = "red";
        error.style.fontSize = "small";
        name.style.border = "1px solid red";

    }
    if (fathername.value.trim() == "") {
        error1.innerHTML = "field is required";
        fathername.style.border = "1px solid red";
        error1.style.fontSize = "small";
        error1.style.color = "red";

    }
    if (email.value.trim() == "") {
        error2.innerHTML = "field is required";
        error2.style.color = "red";
        error2.style.fontSize = "small";
        email.style.border = "1px solid red";
    }
    if (regex.test(email.value)) {
        error2.innerHTML = "";

    }
    else {
        error2.innerHTML = "invalid";
        error2.style.color = "red";
        error2.style.fontSize = "small";

    }

    var regex2 = /^[0-9]{2}-[0-9]{2}-[0-9]{4}/;
    if (dobirth.value.trim() == "") {
        error3.innerText = "field is required";
        error3.style.color = "red";
        error3.style.fontSize = "small";
        dobirth.style.border = "1px solid red";
    }
    if (regex2.test(dobirth.value)) {
        error3.innerHTML = "";
    }
    else {
        error3.innerHTML = "invalid";
        error3.style.fontSize = "small";
        error3.style.color = "red";
    }

    var regex1 = /^[6-9]{1}[0-9]{9}$/;
    if (mobilenumber.value.trim() == "") {
        error4.innerHTML = "field is required";
        error4.style.color = "red";
        error4.style.fontSize = "small";
        mobilenumber.style.border = "1px solid red";
    }
    if (regex1.test(mobilenumber.value)) {
        error4.innerHTML = "";
    }
    else {
        error4.innerHTML = "invalid";
        error4.style.color = "red";
        error4.style.fontSize = "small";
    }
}



function Checked() {
    var radio = document.getElementById("radio");
    var address3 = document.getElementById("address3");
    var address4 = document.getElementById("address4");
    var select1 = document.getElementById("select1");
    var pincode1 = document.getElementById("pincode1");
    var city1 = document.getElementById("city1");
    var address1 = document.getElementById("address1");
    var address2 = document.getElementById("address2");
    var city = document.getElementById("city");
    var pincode = document.getElementById("pincode");
    var select = document.getElementById("select");
    var error5 = document.getElementById("error5");
    var error6 = document.getElementById("error6");
    var error7 = document.getElementById("error7");
    var error8 = document.getElementById("error8");
    var error9 = document.getElementById("error9");

    var regex3 = /^[6]\d{5}/;
    error8.innerHTML = "";
    error5.innerHTML = "";
    error6.innerHTML = "";
    error7.innerHTML = "";
   
    address1.style.border = "1px solid black";
    address2.style.border = "1px solid black";
    city.style.border = "1px solid black";
    pincode.style.border = "1px solid black";

    if (address1.value.trim() == "") {
        error5.innerHTML = "required field";
        error5.style.color = "red";
        error5.style.fontSize = "small";
        address1.style.border = "1px solid red";
    }
    if (address2.value.trim() == "") {
        error6.innerHTML = "required field";
        error6.style.color = "red";
        error6.style.fontSize = "small";
        address2.style.border = "1px solid red";
    }
    if (city.value.trim() == "") {
        error7.innerHTML = "required field";
        error7.style.color = "red";
        error7.style.fontSize = "small";
        city.style.border = "1px solid red";
    }

    if (radio.checked) {
        if (regex3.test(pincode.value)) {
            address3.value = address1.value;
            address4.value = address2.value;
            city1.value = city.value;
            select1.value = select.value;
            pincode1.value = pincode.value;
        }
        else {
            error8.innerHTML = "please fill a valid pincode";
            error8.style.fontSize = "small";
            error8.style.color = "red";
            pincode.style.border = "1px solid red";
        }
    }
    else {
        error9.innerHTML = "Please fill the fields";
        error9.style.color = "red";
        error9.style.fontSize = "small";
    }
}