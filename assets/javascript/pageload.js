function ifuserloggedin(){
    let loggedInusers = JSON.parse(localStorage.getItem("loggedInusers"));
    if(loggedInusers == null){
        window.location.href = "./login.html";
        alert("As you are new user please login to continue")
    }
}
ifuserloggedin();