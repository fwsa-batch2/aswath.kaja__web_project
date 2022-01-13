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
            "userName": userName,
            "email": email,
            "password": password,
            "password2": password2,
        } 
        console.table(customerdetails)
        const userNameExists = userNamevalid(userName);
        const emailexists = emailvalid(email);
        if(userNameExists){
            alert("user already exists")
        }
        else if(emailexists){
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
    function userNamevalid(currentname) {
        let taken = false;
        for (let i of userList) {
            const nameA = i.userName;
            console.log(currentname);
            console.log(nameA);
            if (currentname === nameA) {
                taken = true;
                break;
            }
        }
        return taken;
    }
function emailvalid(currentemail) {
    let used = false;
    for (let i of userList) {
        const email = i.email;
        if (currentemail === email) {
            used = true;
            break;
        }
    }
    return used;
}

onPageload();

