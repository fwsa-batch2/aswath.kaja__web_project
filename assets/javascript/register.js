let userList = [];

function onPageload() {
    let details = JSON.parse(localStorage.getItem("users"));
    if (details != null) {
        userList = details;
}
}

function register(event){
    event.preventDefault();

    let userName = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let password2 = document.getElementById("password2").value.trim(); 

        const customerdetails = {
            "username": userName,
            "email": email,
            "password": password,
            "password2": password2,
        } 
        console.table(customerdetails)
        const emailexists = emailvalid(email);
        if(emailexists){
            alert("email already exists")
        }
        else if(password != password2){
            alert("Password mismatched")
        }
        else if(password===""&&password2===""){
            alert("password cannot be empty")
        }
        
        else{
            userList.push(customerdetails);
            let userArray = JSON.stringify(userList)
            localStorage.setItem("users", userArray);
            window.location.href = "./../../pages/login.html";
        }
    }

function emailvalid(currentemail) {
    // let userData = JSON.parse(localStorage.getItem("users"));
    let used = false;
    for (i = 0; i < userList.length; i++) {
        const email = userList[i].email;
        if (currentemail == email) {
            used = true;
            break;
        }
    }
    return used;
}

onPageload();

