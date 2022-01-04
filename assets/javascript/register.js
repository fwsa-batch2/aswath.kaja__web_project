let userList = [];

function onPageload() {
    console.group("onPageload")
    let details = JSON.parse(localStorage.getItem("users"));
    console.log("details")
    if (details != null) {
        userList = details;
}
console.groupEnd(onPageload)}

function register() {
    event.preventDefault();
    console.group("register")

    let userName = document.getElementById("username").value.trim();
    console.log(userName)
    let email = document.getElementById("email").value.trim();
    console.log(email)
    let password = document.getElementById("password").value.trim();
    console.log(password)
    let password2 = document.getElementById("password2").value.trim();
    console.log(password2)




        const customerdetails = {
            "username": userName,
            "email": email,
            "password": password,
            "password2": password2,
        } 
        console.table(customerdetails)
        const emailexists = emailvalid(email);
        console.log(emailexists)
        if(emailexists){
            alert("email already exists")
        }
        else if(password != password2){
            alert("Password mismatched")
        }
        else{
            userList.push(customerdetails);
            let userArray = JSON.stringify(userList)
            console.log(userArray)
            localStorage.setItem("users", userArray);
            window.location.href = "./../../pages/login.html";
        }
    console.groupEnd("register")
    }

function emailvalid(currentemail) {
    // let userData = JSON.parse(localStorage.getItem("users"));
    let used = false;
    for (i = 0; i < userList.length; i++) {
        const email = userList[i].email;
        console.log(email)
        if (currentemail == email) {
            used = true;
            break;
        }
    }
    return used;
}

onPageload();

