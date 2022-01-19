console.log("jrkrf")
let userList = [];
function onPageload() {
    let details = JSON.parse(localStorage.getItem("user"));
    if (details){
    userList = details;
}
}
let loggedInusers = JSON.parse(localStorage.getItem("loggedInusers"))[0];
document.getElementById("name").innerHTML=`${loggedInusers.userName}`;
document.getElementById("email").innerHTML=`${loggedInusers.email}`;


function submithandler(event) {
    event.preventDefault();
    const phonenumber = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const message = document.getElementById("message").value.trim();
    const customerdetails = {
        "name": loggedInusers.userName,
        "address": address,
        "phonenumber": phonenumber,
        "email":loggedInusers.email,
        "message":message,
    }
    userList.push(customerdetails);
    let userArray = JSON.stringify(userList)
    localStorage.setItem("user", userArray); 
    document.getElementById("container").style.display="none";
    document.getElementById("ticket").style.display="block";
    document.getElementById("order").innerHTML=`<li>${"Your name:  "}${loggedInusers.userName}</li><li>${"Your email:  "}${loggedInusers.email}</li> <li>${"your number:  "}${phonenumber}</li><li>${"Your address:  "}${address}</li><li>${"Problem:  "}${message}</li>`
}

onPageload();

