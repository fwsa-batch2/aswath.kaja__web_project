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
    const email = document.getElementById("Email").value.trim();
    const problemIn = document.getElementById("problemIn").value.trim();
    const problemNote = document.getElementById("problemNote").value.trim();

    const customerdetails = {
        "name": userName,
        "address": address,
        "phonenumber": phonenumber,
        "Email":email,
        "problemIn": problemIn,
        "problemNote": problemNote,
    }
    userList.push(customerdetails);
    let userArray = JSON.stringify(userList)
    let mus =localStorage.setItem("user", userArray);
    let details = JSON.parse(localStorage.getItem("user"));
 
    toastr.success("Successfully Saved your details");
    event.target.reset();
  
}
onPageload();

