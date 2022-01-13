let userList = [];

function onPageload() {
    let details = JSON.parse(localStorage.getItem("user"));
    if (details){
    userList = details;
}
}

function loginfun(event) {
    event.preventDefault();
    const userName = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const phonenumber = document.getElementById("phoneNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const problemIn = document.getElementById("problemIn").value.trim();
    const problemNote = document.getElementById("problemNote").value.trim();

    const customerdetails = {
        "name": userName,
        "address": address,
        "phonenumber": phonenumber,
        "email":email,
        "problemIn": problemIn,
        "problemNote": problemNote,
    }
    userList.push(customerdetails);
    let userArray = JSON.stringify(userList)
     localStorage.setItem("user", userArray); 
     resultDetails();
    //  event.target.reset();
    //  window.location.href = "./../index.html";
}
function resultDetails(){
    document.querySelector(".box").style.display="none"
    document.querySelector(".customer_ticket").style.display="block"
}
onPageload();

