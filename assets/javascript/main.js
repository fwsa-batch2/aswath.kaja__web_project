let userList = [];

function onPageload() {
    let details = JSON.parse(localStorage.getItem("user"));
    if (details){
    userList = details;
}
}


function loginfun() {
    event.preventDefault();

    const userName = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const phonenumber = document.getElementById("phoneNumber").value.trim();
    const problemIn = document.getElementById("problemIn").value.trim();
    const problemNote = document.getElementById("problemNote").value.trim();

    const customerdetails = {
        "name": userName,
        "address": address,
        "phonenumber": phonenumber,
        "problemIn": problemIn,
        "problemNote": problemNote,
    }
    userList.push(customerdetails);
    let userArray = JSON.stringify(userList)
    localStorage.setItem("user", userArray);
  
}
onPageload();

